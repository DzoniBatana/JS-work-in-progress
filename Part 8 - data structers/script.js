'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  //the same shit like a function but now it is method
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', addres }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addres} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Evo vam vasa ukusna pasta sa ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//////////////////////
/////////////////////
// STRING METHODS PRACTICE
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

// const getCode = str => str.slice(0,3).toUpperCase();
// getCode(from);getCode(to)
//moze i ova opcija da se doda dole mozda je jednostavnije tako umesto da sve ono sto je dole navedeno pisemo duplo

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🎈' : ''} ${type
    .replaceAll('_', ' ')
    .trim()} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} ${time.replace(':', 'h')}`.padStart(50);
  console.log(output);
}

/*

//////////////////////
/////////////////////
//BITNO CODING CHALLANGE 4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🚕'.repeat(i + 1)}`);
  }
});



////////////////
///////////////
//STRING PART 3

//sPLIT METOD and JOIN metod
console.log('a+very+nice+string'.split('+'));
console.log('Nikola Ristic'.split(' '));

const [firstName, lastName] = 'Nikola Ristic'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//stavljanje pocetnih velikih slova kroz funckiju
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('nikola ristic najbolji na svetu');
capitalizeName('nikola ristic rodjendan');

//PADDING A STRING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log('nikola'.padStart(25, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(18238191723098));
console.log(maskCreditCard(93892839482034820));
console.log(maskCreditCard('98239838204823840'));

//REPEAT METOD
const message2 = 'Bad weather... All Departures Delayed.... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line${'🛫'.repeat(n)}`);
};

planesInLine(3);
planesInLine(6);
planesInLine(17);

///////////////////////
//////////////////////
//STRING PART 2
const airline = 'TAP AIR Serbia';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'nIkOLa';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerUpper = passengerLower[0].toUpperCase();
console.log(passengerUpper);
const regularPassenger = passengerUpper + passengerLower.slice(1);
console.log(regularPassenger);

// TRIM opcija za uklanjanje visak "Space button-a" ili cak iksoriscenog enter dugmeta
const email = 'nikola@gmail.com';
const loginEmail = '   NiKOLa@GmaIl.CoM   \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//isti rezultat samo je nacin na koji se dobija malo drugaciji
const noramalEmail = loginEmail.toLowerCase().trim();
console.log(noramalEmail);
console.log(email === noramalEmail);

//replacing
const priceGB = '288,97#';
const priceEU = priceGB.replace(',', '.').replace('#', '$');
console.log(priceEU);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
//apsolutno ista stvar
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// BOOLEANS
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boenig'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Spada u novu kategoriju Aviona!');
} else {
  console.log('Ne spada u novu kategoriju aviona, koji vam je ovo Avion?!?');
}

//Jedna mala vezbica da vidimo sta smo novo naucili i da li to vredi nesto

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(
      'Gospodine Vi niste dozvoljeni da letite sa nama, molim Vas napustite nas let. Hvala!'
    );
  } else {
    console.log('Gospodine nama je veoma drago sto letite sa nama! :))');
  }
};

checkBaggage('I have a LapTop, some Food and a pocket Knife');
checkBaggage('I have sOme socks and maybe my little camera');
checkBaggage('I got Samo Snacks and i have a GUN for protection!');


////////////////////////////
///////////////////////////
// STRING pART 1
const airline = 'TAP AIR Serbia';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('Serbia'));

//BITNO SLICE Metod
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//takodje mozemo i ukoniti odrejdena slova iz nase recenice
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//Jedan malo kompleksniji primer
const checkMiddleSeat = function (seat) {
  //B or E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Bravo kralju dobio si sredinu!');
  else console.log('E da ga jebes vise srece drugi put! :(');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


//////////////////////////
/////////////////////////
console.log('-------CODING CHALLANGE 3-------');

const gameEvents = new Map([
  [17, '⚽GOAL'],
  [36, '➰Substitution'],
  [47, '⚽GOAL'],
  [61, '➰Substitution'],
  [64, '🔶Yellow card'],
  [69, '🔺Red card'],
  [70, '➰Substitution'],
  [72, '➰Substitution'],
  [76, '⚽GOAL'],
  [80, '⚽GOAL'],
  [92, '🔶Yellow card'],
]);

// 1.
//console.log([...evetns.values(evetns)]);
const evetns = gameEvents;
const newEvents = [...new Set(evetns.values())];
console.log(...newEvents);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size}  minutes:`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size}  minutes:`
);

// 4.
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'First' : 'Second';
  console.log(`${half} ${minute}: ${event}`);
}


/////////////////////////////////////////
////////////////////////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct :D'],
  [false, 'Try again'],
]);

console.log(question);

//convert OBJECT to MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert MAP to ARRAY
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]); //ovo ovde je bas i da sle skloni "MAP ITERRATOR" i da ostane samo Array
console.log(question.values());


//BITNO  MAPS
///////////////////////////////
//////////////////////////////

const rest = new Map();
rest.set('name', 'Dzonijev restoran');
rest.set(1, 'Krusevac, Srbija');
console.log(rest.set(2, 'Minhen, Nemacka'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(2));
console.log(rest.get(true));

const time = 2;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
//ovom ovde metodom se postavlja logicka varijanta da li restoran radi u odredjenom trenutku koji je regulisan varijablom time

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
//ovom metodom se brise aplsolutno sve iz MAPE

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


//////////////////////////////////////////
/////////////////////////////////////////
//BITNO     SEET
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(orderSet);

console.log(new Set('Nikola'));
//sa .size opcijom se prebrojavaju svi elementi SET-a ali se i ne dupliraju prilikom brojanja
console.log(orderSet.size);
//sa HAS opcijom ispitujemo da li odredjeni proizvod ima u nasem SET-u, ukoliko ima odgovor je true ukoli nema odgovor je false naravno
console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));
//opcijom add se dodaju novi elementi u SET-u ali se i ne dupliraju ukoliko se dva puta dodaju, ocitavaju se samo jednom
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
//BITNO
//orderSet.delete('pizza');
//opcijom delete se uklanjaju elemnti iz SET-a
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const newStaff = [...new Set(staff)];
console.log(newStaff);
console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']));
console.log(new Set('NIKOLILILOKASJDNAOSDJSNDF').size);


////////////////////////////////////////////
///////////////////////////////////////////
console.log('----CODING CHALLANGE 2-_-----');
const game = {
  team1: 'Bayern Muncih',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'DAvies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
//average of odds
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


///////////////////////////////////////////
// Propertry NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
//console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(
    `On ${key} we are opening at ${open}, and we are closing at ${close}`
  );
}
//ovde selektujemo kljucnu rec sa "key" koja se odnsoi na dane u nedelji i onda izmedju ostalog govorimo kada smo otvoreni i kada smo zatvoreni takodje izmedju ostalog sa recima "open" i "close"


////// ////////////////////////////////////////////////
//   METHOD, ARRAYSSS AND OBJECT

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
//ovim znakom pitanja postavljamo pitanje da li uopste postoji "openingHours" i da li u tom nizu uopste postoji "mon" kao opcija da je otvoreno

//example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //const open =restaurant.openingHours[day]?.open ?? 'closed';
  const open = restaurant.openingHours[day]?.open ?? 'not working today';
  const close = restaurant.openingHours[day]?.close ?? 'closed';
  console.log(`On ${day}, we open at ${open}, and we close at ${close}.`);
}
//kod ove situacije ovde postavlja se pitanje koji su to svi danu u nizu koji se zove "days", zatim koji se dani koji rade i od kada do kada je otvoreno tj zatvoreno, takodje se jednostavno stavlja "?" posle kljucne reci

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist.');

//ovde kod metoda takodje pitanje da li to postoji i ukoliko ne postoji sto je definisano "??", onda printaj ....

//Arrays
const users = [
  {
    name: 'nikola',
    email: 'rile.97@gmail.com',
  },
];
//const users = [];

console.log(users[0]?.name ?? 'User array prazan');

if (users.length > 0) console.log(users[0].name);
else console.log('User array prazan');
//sitacije je identicna i kod nizova, gde se selektiuje prvi niz iz niza i postavlja se pitanje da li postoji odredjeni parametar kao u ovom slucaju sto je ime




//////////////////////////////////////////
// lOPING ARRAYS FOR THE LOOP 110

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


//////////////////////////////////
console.log('--------CODING CHALLANGE  1 ---------');
const game = {
  team1: 'Bayern Muncih',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'DAvies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2022',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const players1 = [...game.players[0]];
console.log(...players1);

const players2 = [...game.players[1]];
console.log(...players2);

// 2.
const [gk, ...fieldPLayers] = players1;
console.log(gk, fieldPLayers);
// 3.
const allPLayers = [...players1, ...players2];
console.log(...allPLayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(...players1Final);
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


////////////////////////////////////////////
// THE NULLISH COALESCING OPERATOR
restaurant.numGuests = 2;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: NULL and UNDEFINED (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
//kod ove situacije broj gostiju je 10 samo ako tacan broj NULL ili nedefinisan u svakom drugom slcuaju ce da prikaze tacan broj gostiju



//////////////////////////////////////////////
// AND , OR , OPERATORS
console.log('--------OR-------');
//Use ANY data type, return ANY data type, short-ciruiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
//znaci fora je u tome da kad jednom OR operator naidje na truti opciju uopste vise ne razmatra ni jednu drugu soluciju, tako da falsi opcije ne prihvata u potpunosti

console.log(undefined || 0 || '' || 'NIkola' || 23 || null);

//Brojanje broja gostiju
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------AND--------');
//and operator je tacan samo ako su oba opcije tacne, i u tom slucaju vraca onu zadnju tacnije bira onu zadnju
//a ukoliko se u nizu nadje jedna i to samo jedna falsi opcija, AND operator ce da izabere nju iz razloga zato sto je tacno samo ako su sve vrednosti niza tacne ukoliko ima samo jedna vrednost da je falsi onda se bira ta falsi vrednost

console.log('Hello' && 23 && null && 'nikola');

if (restaurant.orderPizza) {
  restaurant.orderPizza('pecurke', 'spanac');
}

restaurant.orderPizza && restaurant.orderPizza('pecurke', 'spanac');


////////////// Rest Pattern and Parameters
// 1.Destructuring

//SPREAD , beacause on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Funtions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 7, 9, 2, 4, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('pecurke', 'luk', 'spanac', 'kackavalj');







/////////////////////////////////////////

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
//ovde pored navodjenja prva 2 elementa niza sa funckijom .... iscitavamo i ostale elemente novog niza
console.log(...newArr);
console.log(1, 2, 7, 8, 9);
//ovde je situacija da funckijom ...naziv array-a ispisujemo sve elemente koji se nalaze u tom nizu, upravo na isti nacin kao i dole sto je navedeno sa klasicnim cl-om
const newMenu = [...restaurant.mainMenu, 'Njoke'];
console.log(newMenu);
//Ovde osim sto izdvajamo elemente iz restorana mi im jos dodajemo jos jedan novi elemnt 'NJoke' i na taj nacin pravimo potpuno novi array

//kopiranje niza
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT Objects
const str = 'Nikola';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//Neki realni primer
const ingridients = [
  // prompt("Let's make pasta! Ingredient 1? "),
  // prompt(' Ingredient 2? '),
  // prompt(' Ingredient 3? '),
];

console.log(ingridients);
restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
//Apsolutno isti nacin od ova dva pitanje je samo koji nacin vise preferirate, ali definitivno je bolji nacin ovaj dole! Jednostavniji!
restaurant.orderPasta(...ingridients);

//Objects
//ovde smo na vec poznate informacije o restoranu dodali jos malo informacija i plus ucitali sve informacije iz vec postojeceg restorana
const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Predrag' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Dzonijev restoran';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  addres: 'Vie del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  addres: 'Vie del Sole,21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, C: 14 };

({ a, b } = obj);
console.log(a, b);

//nested obj
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondory] = restaurant.categories;
console.log(main, secondory);
//ukoliko hocemo da selektujemo trecu stavku iz niza samo cemo da skipujemo drugi deo, tacnije samo cemo da ostavimo prazno polje na mesto gde treba da bude naziv za dva (prvi, , treci) = ovkao! BITNO

//switching variables

// const temp = main;
// main = secondory;
// secondory = temp;
// console.log(main, secondory);
//zamena mesta prvog i drugog naziva

[main, secondory] = [secondory, main];
console.log(main, secondory);

//recive 2 return value from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//array inside in array
const nested = [2, 4, [5, 6]];
//ovde smo selektovali broj 2 i ceo niz a to je [5,6]
// const [i, , j] = nested;
// console.log(i, j);

//razdvajanje brojeva u nizu i nacin na koji mozemo da selektujemo tacno odvojene brojeve niza a da ne zakacimo ceo niz
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


*/
