'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-03-06T17:01:17.194Z',
    '2022-03-09T23:36:17.929Z',
    '2022-03-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Nikola Ristic',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 9999,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'RSD', //Дин
  locale: 'sr-RS', //srb
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);

  // else {
  //   const year = date.getFullYear();
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   return `${day}/${month}/${year}`;
  // }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
    </div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrese 1s
    time = time - 1;
    //time--;
  };
  // Set time to 5 minutes
  let time = 120;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//Fake ALways log in only for the  test of the code
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//day, month, year
const locale = navigator.language;
console.log(locale);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Experimenting API,date and time for diferent country
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // //date and time for login in
    // const day = `${now.getDate()}`.padStart(2, 0); //bukvalno se stavlja da bude ono 03. za mesec a ne samo 3ci mesec, tako isto i za dane u mesecu i zato koristimo PADStart
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // const sec = `${now.getSeconds()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} || ${hour}:${min}:${sec}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Loan date
      currentAccount.movementsDates.push(new Date().toDateString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
///////////
//BITNO
console.log(23 === 23.0);

// Base 10 - 0 to  9
// BInary base 2 - 0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

//console.log(parseFloat(' 2.5rem  '));

//check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

// Checking if value is nmber
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


/////////////////////
//BITNO

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //the same
console.log(8 ** (1 / 3)); // na kubni

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10') ** 2);
console.log(Number.parseFloat('10px'));

console.log(Math.trunc(Math.random() * 6) + 1); // Random number betwen 1 and 6

//randomm number 10 - 20
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
console.log(randomInt(10, 20));

console.log(Math.trunc(23.3));

console.log(Math.round(23.9));
console.log(Math.round(23.3));

// rounded up, zaokruzuju gornju vrednos uvek
console.log(Math.ceil(23.9));
console.log(Math.ceil(23.3));

//rounded down, zaokruzuju donju vrednost uvek
console.log(Math.floor(23.9));
console.log(Math.floor(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));


///////////////////
//BITNO

//remainder operater
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(6));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'lightblue';
  });
});


////////////////
//BITNO

//BIG INT
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //maksimalan broj koji javaScipt podrzava

console.log(48123918298310820978970238472278346786n);
console.log(BigInt(12398127));

//Operations
console.log(1000n + 1000n);
console.log(87238472308472830472083742837402n * 1000000000n);
//console.log(Math.sqrt(16n));

const huge = 128371928739817239871289371n;
const num = 23;
console.log(huge * BigInt(num));

// Exception
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

//
console.log(huge + ' is REAlly bih!!');

// DIvisions
console.log(11n / 3n);
console.log(10 / 3);

//////////////////
//BITNO

//DATE AND TIME

//Create a date
const now = new Date();
console.log(now);

console.log(new Date('2022-03-12T15:11:39.338Z'));
console.log(new Date('Mart 12, 2022'));
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(account1.movementsDates[1]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // this is actually 3 days later of the line upstars

// Working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth()); // 0 base
console.log(future.getDay()); // 0 base (0,1,2,3,4,5,6)
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());
console.log(new Date(2142253385000));

console.log(Date.now());
console.log(new Date(1647098544315));

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
//console.log(Number(future));
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);

const num = 388828487.23;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'RSD',
  //useGrouping: false,
};

console.log('SRB:   ', new Intl.NumberFormat('sr-RS', options).format(num));
console.log('US:   ', new Intl.NumberFormat('en-US', options).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
  );
*/

//Timer - SetTImeout

const ingredients = ['olives', ''];
const picaTimer = setTimeout(
  (ing1, ing2) => console.log(`Evo vase pice sa ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(picaTimer);

// settimeout
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// },1000);

// const day = `${now.getDate()}`.padStart(2, 0); //bukvalno se stavlja da bude ono 03. za mesec a ne samo 3ci mesec, tako isto i za dane u mesecu i zato koristimo PADStart
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// const sec = `${now.getSeconds()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year} || ${hour}:${min}:${sec}`;

//Klasican primer sata, sa datumom koji se obnavlja svake sekunde, mali challange
setInterval(function () {
  const sad = new Date();
  const day = sad.getDay();
  const month = sad.getDate();
  const year = sad.getFullYear();
  const hour = `${sad.getHours()}`.padStart(2, 0);
  const min = `${sad.getMinutes()}`.padStart(2, 0);
  const sec = `${sad.getSeconds()}`.padStart(2, 0);
  console.log(
    `Danas je: ${day}/${month}/${year} || A trenutno vase vreme jeste:  ${hour}:${min}:${sec}`
  );
}, 1000);
