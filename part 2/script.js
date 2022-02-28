'use strict';
//prikazuje tacno gde nam se nalazi greska u kodu koristeci strict mode, prikazuje tacno gresku u kojoj se liniji nalazi

/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 23;
// ove gore navedene stvari se ne mogu koristiti kao const iz mnogo razloga koji su nam vec poznati


function logger() {
    console.log('Moje ime je Nikola');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const jucie = `Jucie with ${apples} apples and ${oranges} oranges.`;
    return jucie;
}

const appleJucie = fruitProcessor(5, 0);
console.log(appleJucie);
// console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declaration
function calcAge1(birthYear){
    const age = 2037 - birthYear;
    return age;
}

const age1 = calcAge1(1997);
console.log(age1);


//function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);
console.log(age1, age2);




//Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log( yearsUntilRetirement(1997, 'Nikola'));
console.log( yearsUntilRetirement(1969, 'Pendula'));



const cutPieces = function(fruit){
    return fruit * 4;
};

const fruitProcessor = function (apples, oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear){
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years. `);
        return retirement;
    } else {
        console.log(`${firstName} has already retired :))`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1997, 'Nikola'));
console.log(yearsUntilRetirement(1949, 'Kritina'))


//coding challange 1 
console.log('Coding challange number 1');

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreKoala = calcAverage(65, 54, 49);
let scoreDolphine = calcAverage(44, 23, 71);
console.log(scoreKoala, scoreDolphine);


const checkWinner = function(averageKoala, averageDolphine){
    if (averageDolphine >= 2 * averageKoala){
        console.log(`Pobedile su delfini ${averageDolphine} vs ${averageKoala}`);
    } else if (averageKoala >= 2 * averageDolphine) {
        console.log(`Pobedile su kola ${averageKoala} vs ${averageDolphine}`);
    } else {
        console.log('No one wins.')
    }
}

checkWinner(scoreKoala, scoreDolphine);

console.log('Test data 2');
scoreDolphine =  calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
console.log(scoreKoala, scoreDolphine);
checkWinner(scoreDolphine, scoreKoala);


//arrays
const friend1 = 'marko';
const friend2 = 'milos';
const friend3 = 'petar';

const friends = ['marko', 'milos', 'petar'];
console.log(friends);

const year = new Array(1997, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1 ]);

friends[1] = 'kristina';
console.log(friends);


const firstName = 'NIkola';
const nikola = [firstName, 'ristic', 24, 'programmer', friends ];
console.log(nikola);
console.log(nikola.length);



//exercise
const calcAge = function (birthYear){
    return 2021 - birthYear;
}

const years = [1997, 1995, 2002, 2021, 2005];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1]) ];
console.log(ages);



//add elements
//push novi metod za dodavanje ili ti ubacivanje elemenata u listu
const friends = ['marko', 'milos', 'petar'];
const newLenght = friends.push('kira');
console.log(friends);
console.log(newLenght);

//stavlja novi element kao prvi element u listi
friends.unshift('pendula');
console.log(friends);

//remove elements
friends.pop(); // remove last one in list
const popped = friends.pop(); //prikazuje kog clana si izbacio iz liste
console.log(popped);
console.log(friends);

friends.shift(); //izbacuje ili ti brise prvog iz liste u ovom slucaju je to pendula
console.log(friends);

console.log(friends.indexOf('milos')); //pokazuje nam na kojoj se poziciji nalazi 'milos' u nasoj listi u ovom slucaju je ta pozicija 1, jer je 'marko' na poziciji 0
console.log(friends.indexOf('pendula')); //ukoliko uzmemo neko ime koje nije u nasoj listi onda ce da nam izbaci -1 kao reultat da elemnt koji smo trazili nije u nasoj listi


friends.push(23);
console.log(friends.includes('marko'));
console.log(friends.includes('pendula'));
//proverava sa 'true' i 'false' da li su odredjeni elementi u nasoj listi
console.log(friends.includes(23));
console.log(friends.includes('23'));



if(friends.includes('milos')) {
    console.log('IMate prijatelja koji se zove milos');
}





//coding challange number 2
console.log('Coding challange number 2');

const calcTip = function(bill)
{
return bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
};


const bills = [125, 555, 44];
const bill = calcTip(bills[0]);
const bill1 = calcTip(bills[1]);
const bill2 = calcTip(bills[2]);
console.log(bills);
console.log(bill, bill1, bill2);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals)



// const nikolasArray = [
//     'nikola',
//     'ristic',
//     2021 - 1997,
//     'programer',
//     ['Pendula', 'Natasa', 'Kristina', 'Petar']
// ];


const nikolas = {
    firstName: 'nikola',
    lastName: 'ristic',
    age: 2021 - 1997,
    job: 'programer',
    friends: ['Pendula', 'Natasa', 'Kristina', 'Petar']
};
console.log(nikolas);
console.log(nikolas.lastName);
console.log(nikolas['lastName']);


const nameKey = 'Name';
console.log(nikolas['first' + nameKey]);
console.log(nikolas['last' + nameKey]);

const interestedIn = prompt('Sta zelis da znas o Nikoli, izaber izmedju imena, prezimena, godina, posla i prijatelja!');


if(nikolas[interestedIn]){
    console.log(nikolas[interestedIn]);
}
else {
    console.log('Pogresan zahtev,izaber izmedju imena, prezimena, godina, posla i prijatelja! ');
};

//nacin da dodamo nesto u nas objekat
nikolas.location = 'Srbija';
nikolas['facebook'] = '@dzoni_batana';
console.log(nikolas);

//Challagne
//nikola ima 4 prijatelja i njegov najbolji prijatelj je Kristina.
console.log(nikolas['firstName'], 'ima', nikolas.friends.length, 'prijatelja i njegov najbolji prijatelj je ', nikolas.friends[2]);



const nikolas = {
    firstName: 'nikola',
    lastName: 'ristic',
    birthYear: 1997,
    job: 'programer',
    friends: ['Pendula', 'Natasa', 'Kristina', 'Petar'],
    hasDriverLicense: true,


    // calcAge: function(birthYear){
    //     return 2021 - birthYear;
    // }

    // calcAge: function(){
    //     //console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} je ${this.calcAge()}, i on je po zanimanju ${this.job} i on  ${this.hasDriverLicense ? 'ima' : 'nema'} vozacku dozvolu`;
    }
    
};

console.log(nikolas.calcAge());
console.log(nikolas.age);
console.log(nikolas.age);
console.log(nikolas.age);
console.log(nikolas.getSummary());


//console.log(nikolas.calcAge(1997));//prvi nacin
//console.log(nikolas['calcAge'](1997));//drugi nacin

//challange 



//coding challange

const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBmi: function(mass){
        return this.mass / this.height ** 2;
    }

    
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBmi: function(mass){
        return this.mass / this.height ** 2;
    }
}

console.log(John.calcBmi());
console.log(Mark.calcBmi());

if (John.calcBmi() >= Mark.calcBmi()){
    console.log(`${John.firstName} ima veci BMW ${John.calcBmi()} od ${Mark.firstName}-vog BMI ${Mark.calcBmi()}.`)
} else
{
    console.log(`${Mark.firstName} ima veci BMW ${Mark.calcBmi()} od ${John.firstName}-vog BMI ${John.calcBmi()}.`)
}






//LOOOOOOOOPS


console.log('🐱‍🐉👏💖😜🤷‍♂️🤷‍♀️😍👌😁🙌😎');

// console.log('Dizanje tegova, reputacija 1 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 2 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 3 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 4 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 5 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 6 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 7 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 8 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 9 🤷‍♂️🤷‍♀️ ');
// console.log('Dizanje tegova, reputacija 10 🤷‍♂️🤷‍♀️ ');
//postoji laksi nacin da se sve ovo odradi a to je kroz for petlju

for(let rep = 1; rep <= 10; rep++){
    console.log(`Dizanje tegova, reputacija ${rep}  🤷‍♂️🤷‍♀️` );
}



//Looop
 const nikolasArray = [
     'nikola',
     'ristic',
     2021 - 1997,
     'programer',
     ['Pendula', 'Natasa', 'Kristina', 'Petar'],
     true
 ];

 const types = [];

 for(let i = 0; i < nikolasArray.length; i++){
     console.log(nikolasArray[i], typeof nikolasArray[i]);

    //  types[i] = typeof nikolasArray[i];
     types.push(typeof nikolasArray[i]);
 }

 console.log(types);

//klasicno oduzimanje godina i dodavanje u novi array, kroz for peltlju JAKO VAZNO DA SE ZAPAMTI OVAJ DEO OVDE!!!!!
 const years = [1991, 2007, 1997, 1969];
 const ages = [];

 for(let i = 0; i < years.length; i++){
     ages.push(2021 - years[i]);
 }
console.log(years);
console.log(ages);


//continue and break
//izvlacenje samo stringova iz niza, kroz loop nacin
console.log('======ONLY STRING continue=====');
for(let i = 0; i < nikolasArray.length; i++){
   if(typeof nikolasArray[i] !== 'string') continue;
   
   
    console.log(nikolasArray[i], typeof nikolasArray[i]);
}


console.log('======BREAK WITH NUMBER=====');
for(let i = 0; i < nikolasArray.length; i++){
   if(typeof nikolasArray[i] === 'number') break;
   
   
    console.log(nikolasArray[i], typeof nikolasArray[i]);
}



  //FOR LOOOP

const nikolica = [
    'nikola',
    'ristic',
    2021 - 1997,
    'programer',
    ['Pendula', 'Natasa', 'Kristina', 'Petar']
];

//ovde hocemo da iscitavamo vrednosti iz niza od 4 do 0, znaci od pozadi da procitamo sve vrednosti

for(let i = nikolica.length - 1; i >= 0; i--){
    console.log(i, nikolica[i]);
}


for(let exercise = 1; exercise < 4; exercise++){
    console.log(`--------Pocetak svega ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(` ${exercise} Dizanja tegova reputacije ${rep}`);
    }
}





//WHILE LOOPS


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`FOR: Dizanje tegova, reputacija ${rep}  🤷‍♂️🤷‍♀️` );
// }


//apsolutno isto deseanja stvari samo sto je gore navedena for loop  petlja a dole je navedena while loope petlja, rezultat je na kraju apsolutno isti

let rep = 1;
while(rep <= 10){
   // console.log(`WHILE: Dizanje tegova, reputacija ${rep}  🤷‍♂️🤷‍♀️` );
    rep++;
}


//funckia za izracunavanje random brojeva do 6, mada je to vrlo promenljivo 
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Bravo ti si dobio broj ${dice} .`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}

*/


//coding challange 4
console.log('========CODING CHALLANGE 4==========');
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function(bill)
{
return bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
};


for (let i = 0; i < bills.length; i++) {
   const tip = calcTip(bills[i]);
   tips.push(tip); 
   totals.push(tip + bills[i]);  

}
console.log(bills);
console.log(tips);
console.log(totals);


//secend deo

const calcAverage = function(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];
    }

    console.log(sum);
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));



