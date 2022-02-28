'use strict';

/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Petar';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }

    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Nikola';
calcAge(1997);




//variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Nikola';
let job = 'programer';
const year = 1997;

//Functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));
//ne moze da pristupi funckiiji addExpr iz razloga zato sto je constanta definisano nako cl-a i to je razlog zasto ne moze da se pristupi, dok funckiji apsolutno moze da pristupi jer ne predstavlja konstantu

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all product deleted!');
}



console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1997);
//ovo ovako nece biti moguce zato sto smo u strick modu

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1969);
//Kod ovkave situacije je moguce neko deseavanje ali iz razloga zato sto je ova funckija leksikal i this u ovom slucaju  se odnosi na ceo window tako da je to ovde moguce izvrsiti

const nikola = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

nikola.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = nikola.calcAge;


const nikola = {
  firstName: 'Nikola',
  year: 1997,
  calcAge: function () {
    //console.log(this);
    console.log(2022 - this.year);

    //BITNO
    //soLUTION 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && 1997 <= self.year <= 1997);
    //   //console.log(this.year >= 1981 && 1997 <= this.year <= 1997);
    //   //ukoliko kao gore navedeno napravimo constantu self sa definicijom this, ona ce kupiti podatke iz prethodne funkcije ali cemo mi takodje izvan trenutne funckije moci da koristimo mogucnost this
    // };

    //SOLUTION 2
    //ARROW function cisto samo da se zna
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && 1997 <= this.year <= 1997);
    };
    isMillenial();
  },

  greet: () => console.log(`Hej ${this.firstName}`),
};

nikola.greet();
nikola.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 18);

//arrrow tip f-je
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
//arguments su dostupni samo za regularan tip funckije za arrow tip funkcije nisu dostupni




let age = 25;
let oldAge = age;
age = 26;
console.log(age);
console.log(oldAge);

//obj
const me = {
  name: 'nikola',
  age: 25,
};

const friend = me;
friend.age = 27;


*/

//primitive types
let lastName = 'Ristic';
let oldLastName = lastName;
lastName = 'Lukic';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Ristic',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Ristic';
console.log('Pre udaje:', jessica);
console.log('Posle udaje:', marriedJessica);

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Ristic',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Lukic';

jessicaCopy.family.push('DJole');
jessicaCopy.family.push('Dule');

console.log('Pre udaje:', jessica2);
console.log('Posle udaje:', jessicaCopy);
