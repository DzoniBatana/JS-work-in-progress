'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Nikola Ristic',
  movements: [500, 300, -100, -10, -90, -350, 2500],
  interestRate: 0.9,
  pin: 9999,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
//label
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

//container
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

//btn
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

//input
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//BITNO
//own APPLICATION CODE !!!!!!!!!!
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//adding 'sum' balance to labelBalance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const claclDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

//create userName to logIN
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUi = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  claclDisplaySummary(acc);
};

//LOGIN FITUARE, EVENT handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting, da ne nestaje kad se klikne
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message part 1
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    // UPDATE UI
    updateUi(currentAccount);
  }
});

//Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = '';
  inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //UPDATE UI
    updateUi(currentAccount);
  }
});

//SOME METHOND LOAN

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUi(currentAccount);
  }

  inputLoanAmount.value = '';
});

//close account form

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    //delte account
    accounts.splice(index, 1);

    //HIDE UI
    containerApp.style.opacity = 0;
  }
  //clear input area
  inputClosePin.value = '';
  inputCloseUsername.value = '';
  //inputClosePin.value = inputCloseUsername.value = '';
});

//sort btn

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
////////////////////////////

///////////////////
//BITNO PRACTICE
//////////////////

//1.
const bankDepositeSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositeSum);

// 2.
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  //.reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 100 ? ++count : count), 0);
console.log(numDeposits1000);

//Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposite, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposite += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposite' : 'withdrawals'] += cur;
      return sums;
    },
    { deposite: 0, withdrawals: 0 }
  );

console.log(deposite, withdrawals);

//4.
// this is a nice title  => This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

//////////////////////
////////////////////////BITNO CODING CHALLANGE BITNO
/////////////////////////

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Nikola'] },
];
// 1.
//forEach petlja
dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.

const sara = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sara);
console.log(
  `Sarah dog is eating too ${sara.curFood > sara.recFood ? 'much' : 'litle'}`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLitle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLitle);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')} dogs eating to much.`);
console.log(`${ownersEatTooLitle.join(' and ')} dogs eating to litle.`);

//5.

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6.
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
const okayFood = dogs
  .filter(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
  .flat();
console.log(okayFood);

//8.

const copyDogs = dogs.sort((a, b) => a.curFood - b.recFood);
console.log(copyDogs);

/*
//BITNO FILL metod
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);

const y = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
y.fill(99, 6, 9);
console.log(y);
x.fill(1);
console.log(x);

//Array.from
const w = Array.from({ length: 7 }, () => 1);
console.log(w);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  //ucitavamo ga ovde kako bi dobili svih 7 transakcija koje se vode pod odredjenom klasom a ne samo 2 koje su u HTML kodu
  const movementUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementUi);

  //apsolutno identican nacin kao i gore samo na drugaciji
  const movementUi2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementUi2);
});

/////////////////////////
//BITNO SORTING ARRAYS
////////////////////////

//STring sort
const owners = ['Jonas', 'Zach', 'Aadam', 'Martha'];
console.log(owners.sort());

//Numbers
console.log(movements);

//retrun < 0, A,B(keep order)
//return >0, B,A (switch order)

//ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

//dosta jednostavniji nacin od ovog gore a opet radi istu stvar
movements.sort((a, b) => a - b);
console.log(movements);
//descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements);

////////////////////////////
//BITNO FLAT AND FLATMAP ARRAy

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//FLATMAP combined MAP and FLAT metod

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

/////////////////
//BITNO SOME METHOD
/////////////////

//Euqiality
console.log(movements);
console.log(movements.includes(-130));

// SOME: codition
//console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov => mov > 0));

//SEPARETE Callback
const depostie = mov => mov > 0;
console.log(movements.some(depostie));
console.log(movements.every(depostie));
console.log(movements.filter(depostie));


////////////
//BITNO FIND metod
///////////

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Nikola Ristic');
console.log(account);

/////////////////
//BITNO CHAINING METOD
///////////////////////

const euroToUsd = 1.1;

//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/////////////////////////////
//BITNO CODING CHALANGE 3 BITNO
/////////////////////////////
//CHAIN METOD

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
/////////////////////
//BITNO CODING CHALLANGE 2 BITNO
///////////////////////////

//const ages1 = [16, 6, 10, 5, 6, 1, 4];
//const humanAge = [];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adult = humanAges.filter(function (ages) {
    return ages >= 18;
  });
  const averageAdultDog =
    adult.reduce((acc, cur) => acc + cur, 0) / adult.length;

  console.log(humanAges);
  console.log(adult);
  return averageAdultDog;
};
const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg);
const avg1 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);


//REDUCE METOD
//BITNO
//////////////////////////////////

//accumalatro => SNOWBALL
const balance = movements.reduce((acc, cur) => acc + cur, 0);
//ovde deklarisemo 0 koa pocetnu vrednost, jer smatramo da se krece od nule i iz tog razloga je tu sada 0, donji princip je isti samo sto sabira finalni sum, bez printa iteracija

let balanaceFor = 0;
for (const mov of movements) balanaceFor += mov;
console.log(balanaceFor);

//MAXIMUM VALUE in our array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

/////////////////////////
///FILTER METOD
//BITNO
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositesFor = [];
for (const mov of movements) if (mov > 0) depositesFor.push(mov);
console.log(depositesFor);

//arrow function practice
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


//const withdrawals = movements.filter(function (mov) {
//return mov < 0;
//});
//console.log(withdrawals);

//const withdrawalsFor = [];
//for (const mov of movements) if (mov < 0) withdrawalsFor.push/(mov);
//console.log(withdrawalsFor);

//const user = 'Steven Thomas Williams'; //stw user in lowercase
//console.log(createUsernames('Steven Thomas Williams'));
//createUsernames('Kristina Predraga Ristic');
//createUsernames('Petar Ristic');
//createUsernames('Natasa Ristic');
//createUsernames('Predrag Zvonimir Ristic');

/////////////////////
////////////////////
//BITNO
//Map method  MAP FILER

const euroToUsd = 1.1;

//const movementsUsd = movements.map(function (mov) {
//return mov * euroToUsd;
//});

//arrow function the same of the up
const movementsUsd = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUsd);

const movementsUsdfor = [];
for (const mov of movements) movementsUsdfor.push(mov * euroToUsd);
console.log(movementsUsdfor);

const movementsDescriptions = movements.map(
  (mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}`
);
console.log(movementsDescriptions);

//BITNO
////////////////////////////
///CODING CHALLANGE NUMBER 1
///////////////////////////

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const newdogsJulia = dogsJulia.slice(1, -2);

const juliaAndKateDogs = dogsKate.concat(newdogsJulia);

console.log(newdogsJulia);
console.log(juliaAndKateDogs);

juliaAndKateDogs.forEach(function (months, i) {
  const year = months >= 3 ? 'old dog' : 'puppy';

  if (months >= 3) {
    console.log(`Dog number ${i + 1} is ${year}, and is ${months} years old. `);
  } else {
    console.log(`Dog number ${i + 1} is ${year}, and is ${months} years old. `);
  }
});

//kako je po resenju, a gore je kako sam ja odradio
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is adult dog and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES BITNO

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (key, value, map) {
  console.log(`${key}: ${value}`);
});

//////////////////////////////////
/////////////////////////////////
//BITNO


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('_________ FOREACH _________');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You wiyhdrew ${Math.abs(movement)}`);
  }
});

/////////////////////////////////////////////////
////////////////////////////////////////////////
//BITNO

//SLICE

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE  - cita
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));
*/
