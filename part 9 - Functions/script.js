'use strict';

//////////////
/////////////
//BITNO CODING CHALLANGE 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const plava = document
    .querySelector('body')
    .addEventListener('click', function () {
      (header.style.color = 'blue'),
        (document.body.style.background = 'yellow');
    });
})();

/*
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

//const perGroup = 1000;
boardPassengers(180, 3);





const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

///////////
//////////
//LEKCIJA
const runOnce = function () {
  console.log('This will never run agein!');
};
runOnce();
//IIFE - imidietly invoke function expresion
(function () {
  console.log('This will never run again!');
})();

//arrow IIFE
(() => console.log('This will ALSO never run again!'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

//console.log(isPrivate);
console.log(notPrivate);

///////////
//////////
//BITNO CHALLANGE NUMBER 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Pyton', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // REgister answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [2, 3, 4] }, 'string');
poll.displayResults.call({ answers: [3, 4, 5, 5, 6, 7, 1, 2, 3, 4, 5] });

/////////////////
////////////////
//BITNO Lekcija BROJ 5  CALL and APPLY OPCIJE, and BIND METOD
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){}

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Nikola RIstic');
lufthansa.book(234, 'Kristina Ristic');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Call Metod
const book = lufthansa.book;
book.call(eurowings, 23, 'Nikola Dzoni');
console.log(eurowings);

book.call(lufthansa, 244, 'Kristina KIKI');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 444, 'Petar RIstic');
console.log(swiss);

//APPLY METOD
const flightData = [583, 'Natasa Ristic'];
book.apply(swiss, flightData);
book.call(lufthansa, ...flightData);

// BIND metod

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEW(23, 'Marko Markovic');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Petar Petrovic');
bookEW23('Predrag Ristic');
console.log(eurowings);

// WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// PARTIAL Application TAX application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23; bukvalno ista situacija kako god ga zapisao

console.log(addVAT(100));
console.log(addVAT(23));

const addTAX1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT1 = addTAX1(0.23);
console.log(addVAT1(100));
console.log(addVAT1(23));

///////////////
//////////////
//BITNO LEKCIJA 4
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//Arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hej');
greeterHey('Nikola');
greeterHey('Kristina');

greet('Cao')('Tina');
greetArr('Pozdrav')('druze');




/////////////////
////////////////
//BITNO LEKCIJA BROJ 3
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Trasformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the Best!', oneWord);

// js uses calbacks all the time
const high5 = function () {
  console.log('🎄');
};

document.body.addEventListener('click', high5);
['nikola', 'kristina', 'petar'].forEach(high5);

//////////////
/////////////
//BITNO LEKCIJA BROJ 2
const flight = 'SRB123';
const nikola = {
  name: 'Nikola Ristic',
  passport: 123412541241,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 123412541241) {
    alert('Checked in!');
  } else {
    alert('Wrong passport number!');
  }
};

// checkIn(flight, nikola);
// console.log(flight);
// console.log(nikola);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(nikola);
checkIn(flight, nikola);

/////////////////
////////////////
//LEKCIJA BROJ 1
//BITNO  default parametars
const bookings = [];
const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

*/
