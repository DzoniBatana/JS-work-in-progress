/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("NIkola");
console.log(23);

let firstName = "Petar";
let first = 'Nikola';
 
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(first);

let nikola_petar = 'JM';
let kurac = 27;

let person = "nikola";
let PI = 3.14545; 

let myFisrtJob = 'Coder';
let mycurrentJob = 'Student';

let job1 = 'programmer';
let job2 = 'student';

console.log(myFisrtJob);




let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 44);
console.log(typeof 'Nikola');

javascriptIsFun = 23;
console.log(typeof javascriptIsFun);

//undefined
let year; //prazna varijabla 
console.log(year);
console.log(typeof year);
//a ako je deklarisemo kao dole ispod
year = 1997;
console.log(typeof year);



//varijable
let age = 24;
age = 25;

//const deklarisanje varijable za neku konstantu koja se nece menjati nikada u kodu, ona je stalna 
const birthYear = 1997;

//var deklarisanje varijable je okej 
var job = 'programmer';
job = 'student';
console.log(job);

// ovo je globalno deklarisana i ne bi trebalo tako da se deklarisu varijable
mojeIme = "nikola";
console.log(mojeIme);
 



//basic Operators
const now = 2021;
const ageNIkola = now - 1997;
const ageSara = now - 1995;
console.log(ageNIkola, ageSara);
console.log(ageSara);

console.log(ageNIkola * 2, ageNIkola / 10, 2 ** 3);
//2 ** 3 = znaci da je tipa 2 na treci, sto je ono 8, ako stavimo 10 ** 4 to bi bilo fazon 10 na cetvrti

const firstName = "Nikola";
const lastName = "Ristic";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; // 15
x += 10; // ovo je x = x +10;
x *= 4; // ovo je x = x *4;
x++; // x = x +1;
x--; // x = x -1; 
console.log(x);

//comparison operators 
console.log(ageNIkola > ageSara); // imamo <,>,<=,>= sve su to oznako za boolean
console.log(ageSara >= 26);

const isFullAge = ageSara >= 26;

console.log(now - 1997 > now - 1995);


const now = 2021;
const ageNIkola = now - 1997;
const ageSara = now - 1995;

console.log(now - 1997 > now - 1995);

let x,y;
x=y=25-10-5;
console.log(x,y);

const averageAge = (ageNIkola + ageSara) / 2;
console.log(ageNIkola, ageSara, averageAge);



//challenge #1
//1.
let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

console.log(`Mark wight ${markMass}kg and is ${markHeight}m tall. John weights ${johnMass}kg and is ${johnHeight}m tall.`);

markMass = 95;
johnMass = 85;
markHeight = 1.88;
johnHeight = 1.76;

console.log(`Marks weights ${markMass}kg and is ${markHeight}m tall. John weights ${johnMass}kg and is ${johnHeight}m tall.`);

//2.
let johnBMI;
johnBMI = johnMass / johnHeight ** 2;
let markBMI;
markBMI = markMass / (markHeight * markHeight);
console.log(`Mark BMI is ${markBMI}, and John BMI is ${johnBMI}.`);

//3.
let markHigherBMI = markBMI > johnBMI;
let bmi;
bmi = markBMI - johnBMI;
if (markBMI > johnBMI){
    console.log(`Marko ima veci BMI od John-a za ${bmi} u poenima.`);
} else {
    console.log(`John nema veci BMI od Marka jer Marko ima veci BMI za ${bmi}.`);
}
console.log(markHigherBMI);


const firstName = "nikola";
const job = "programmer";
const birthYear = 1997;
const year = 2021;

const nikola = "I'm " + firstName + ' , a ' + (year - birthYear) + 'year old ' + job + '!'; 
console.log(nikola);
//ovo je isti nacin, racnije krajnje resenje je isto ali nacin pisanja se u potpunosti razlikuje i mozda je ipak bolje resenje ovo dole
const nikolaNew = `I am ${firstName} , a ${year - birthYear} year old ${job} !`;
console.log(nikolaNew);

console.log(`just a regular string....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`a moze
jednostavno
i ovako
da se 
uradi!`);



const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log("Ima dovoljno godina za vozacku💕");
} else {
    const yearsLEft = 18 - age;
    console.log(`nema dovoljno godina za vozacku 🐱‍👤${yearsLEft} years hvale `);
}

const birthYear = 1997;
let century;

if (birthYear <= 2000){
    century = 20;
}else {
    century = 21;
}
console.log(century);





//challenge 2
//1.
const markBmi = 44;
const johnBmi = 22;
if(markBmi > johnBmi){
    console.log("Bravo marko tvoj BMI je veci.");
}
else {
    console.log("Bravo Johny tvoj Bmi je veci.");
}

//2.
if(markBmi > johnBmi){
    console.log(`Marko ti si kraljina tvoj BMI je (${markBmi}) i on je veci od John-ovog (${johnBmi}). 👍`);
} else  {
    console.log(`John ti si kraljina tvoj BMI je (${johnBmi}) i on je veci od Markovog (${markBmi}). ✔`);
}



//type coversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('JOnas'))
console.log(String(23), 23 );

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
//kada koristimo minus sve je legitimno i onda se brojevi oduzimaju bez obzira koji je string a koji je broj 
console.log('23' + '10' + 3);
//a ukoliko imamo plus onda je jako bitno kako oznacavamo brojeve da ne bi doslo do mesanja stringa i brojeva samo kod plusa je nemoguce 

console.log('23' * '4'); //ovde moze i kod deljenja isto i string prelazi u number

let n = '1' + 1;
n = n -1;
console.log(n);




// ovo dole su 5 falsy vrednosti koje se odnose na boolean i boolean tako funkcionise ukoliko su one ukljucene kao varijable
// 5  falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nikola'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Ne trosi ih sve!");
} else {
    console.log("Trebao bi da nadjes posao!");
}


let height;
if (height){
    console.log("bravo visina je definisana!");
} else {
    console.log("Visina nije definisana!");
}




const age = '18';
if (age === 18)  console.log('Bravo upravo si postao odrastao! (strict)'); // sa tri '===' je tacno samo ukoliko je sto posto 18 = 18 u svakom drugom pogledu nije ispostovano, onako kao neka cvrsta veza, znaci mora i sa jedne i sa druge strane da bude 'number' ili 'string' a ukoliko je sa jedne string a sa druge number onda je false. Znaci mora se ispostovati i sa jedne i sa druge strane value

if (age == 18) console.log('Bravo ovo je prosta slaba veza! (loose)');


const favourite = Number (prompt("Koji je tvoj omiljeni broj?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log('A bravo ti ga kralju! NaaaJaci si!');
} else if (favourite === 7){
    console.log('A moze i ovaj ako si tako naporan!')
} // sa else if mozemo da idemo iznova i iznova sve dokle imamo odredjene uslove koje treba da se ispostuju

else{
    console.log('A vidi ga ovaj, A dje si ti posa?!');
}

if (favourite !==23) console.log('A zasto ne 23?'); // ovo je samo u slucaju ukoliko zeljeni broj nije 23 onda ti ova opcija izlazi, ukoliko je zeljeni broj 23 onda od ovoga nece biti nista



const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
//ovo je oznaka za I '&&' i ona je tacna samo u slucuja kada su oba true, u svakom drugom slucaju nije tacna false

console.log(hasDriversLicense || hasGoodVision);
//ovo je oznaka za ILI '||' ona je netacna samo u slucaju kada su oba netacna, u svakom drugom slucaje se tretira kao tacna true

console.log(!hasDriversLicense);
//ovo je oznaka za NOt Operator ! i on ono sto je tacno automatski pretvara da bude netacno, ili obrnuto

const shouldDrive = hasDriversLicense &&hasGoodVision;

if (shouldDrive) {
    console.log('Sara je dostupna za voznju!')
} else 
{
    console.log('U ovom slucaju je nesposobna za voznju, nema vozacku!')
}

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired)
{
    console.log('Dostupna je sara da vozi');
} else {
    console.log('Neko ce drugi to da tera');
}



//chalange number 3

let averageScoreKoala;
let averageScoreDolphine;

averageScoreDolphine = ((96 + 108 + 89) / 3);
console.log(averageScoreDolphine);
averageScoreKoala = ((88 + 91 + 110) / 3);
console.log(averageScoreKoala);

if (averageScoreDolphine > averageScoreKoala)
{
    console.log("Pobedio je tim Delfina!")
} else if (averageScoreKoala === averageScoreDolphine){
    console.log("oba tima su jednaka, nereseno je, nemamo pobednika!")
}
else
{
    console.log("Pobedio je bolji tim! A to je tim Koala!")
}


console.log("BONUS 1");
let prosecnoKoala;
let prosecnoDelfin;

prosecnoKoala = ((97 + 112 + 101) / 3);
console.log(`Prosecni poeni tima Koale su ${prosecnoKoala}`);

prosecnoDelfin = ((109 + 95 + 123) / 3);
console.log(`Prosecni poeni tima Delfin su ${prosecnoDelfin}`);


if (prosecnoKoala > prosecnoDelfin && prosecnoDelfin>= 100){
    console.log('nijedan tim nije proseao 100 poena');
}
else if (prosecnoDelfin > prosecnoKoala){
    console.log("Delfini su pobedili ");
}
else if (prosecnoKoala > prosecnoDelfin)
{
    console.log("Koale su pobedile!");
}


console.log("Bonus 2");

const poeniDelfina = (97 + 112 + 81) / 3 ;
const poeniKoala = (109 + 95 + 96) / 3 ;
console.log(poeniDelfina,poeniKoala);

if (poeniDelfina > poeniKoala && poeniDelfina >= 100){
    console.log('Delfini su pobedili!')
} else if (poeniKoala > poeniDelfina && poeniKoala >= 100) {
    console.log('Koale su pobedile! Zna se ko je najvecei');
} else if (poeniDelfina === poeniKoala && poeniDelfina >= 100 && poeniKoala >= 100) {
    console.log("oba tima su pobedila, nereseno je!");
} else {
    console.log('Niko nije osvojio trofej');
}



const day = 'subota';

switch(day){
    case 'ponedeljak': //day === 'monday'
        console.log('Plan rada za ponedeljak');
        console.log('Idi da radis bre');
        break;
    case 'utorak':
        console.log('Igras minecraft sa perom i uzivas u danu');
        break;
    case 'sreda':
        console.log('ides da igras stoni tenis');
        break;
    case 'cetvrtak':
    case 'petak':
        console.log('radis programiranje i uredjujes sajt');
        break;
    case 'subota':
    case 'nedelja':
        console.log('Setas Kiru i citas knjigu');
        break;
    default:
        console.log('nepravilno unesen dan!')
}



if(day === 'ponedeljak'){
    console.log('Bravo ponedeljak je!');
}
else if (day === 'utorak'){
    console.log('Bravo utorak je!');
}
else if(day === 'sreda'){
    console.log('bravo sreda je!');
}
else if(day === 'cetvrtak'){
    console.log('bravo cetvrtak je!');
}
else if(day === 'petak'){
    console.log('Bravo petak je!');
}
else if(day === 'subota' || day === 'nedelja'){
    console.log('Bravo subota je, ali i nedelja! ');
}
else if (day === 'nedelja'){
    console.log('Bravo nedelja je!')
}
else {
    console.log('Prijatelju mislim da si zaboravio da uneses dan!');
}





const age = 24;
age >= 18 ? console.log('Smem da pije vino jer sam dovoljno star') : console.log('Ipak cu ja da pijem vodu');

const drink = age >= 18 ? 'Vino ' : 'Voda';
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'Vino';
}
else {
    drink2 = 'Voda';
}
console.log(drink2);

console.log(`Volim da pijem ${age >= 18 ? 'Vino': 'VOda'}`);



//challange 4
console.log("Coding Challange 4");

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
console.log(`Racun je ${bill}, a napojnica je ${tip} a sve ukupno je ${tip + bill}`);
*/

 
