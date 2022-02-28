/*
const country = 'Srbija';
const continet = 'Europa';
let population = 7;

console.log(country);
console.log(continet);
console.log(population);

let isIsland = false;
isIsland = true;
let language = 'srpski';
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
country +
' is in ' +
continet +
', and its ' +
population + 
' milion people speak ' + 
language;
console.log(description1); 
//moze i opcija iznad a moze i opcija ispod u svakom slucaju i jedna i druga su ispravne, mozda je ova dole ipak malo laksa za savladivanje
const description = `${country} is in ${continet}, and its ${population} milion people speak ${language}`;
console.log(description);

//if else opcija za utvrdjivanje za koliko je veca prosecna populacija drugih zemalja u odnosu na populaciju zemlje koju sam ja deklarisao
if (population > 33) {
    console.log(`${country}'s population is above average `);
} else
{
    console.log(`${country}'s population is ${ 33 - population} milion below average`);
}


console.log('9' - '5'); // to je 4
console.log('19' - '13'); // to je 6
console.log('19' - '13' + 17); //to je 23
console.log('123' < 57); // to je false
console.log(5 + 6 + '4' + 9 - 4 - 2); // to je 1143


/*
const numNeighbours = prompt (
    'How many neighbord contries does your contry have?'
);*/ 
// ova opcija i konstanta gore u principu ne radi pravilno jer pravi gresku kada se definise da imam jednog komsiju
 /*
//later: this helps us prevent bugs
const numNeighbours = Number (
    prompt('How many neighbour contries does your country have?'),
);

if (numNeighbours === 1)
{
    console.log('Only 1 border');
} else if (numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

//utvrdjivanje kroz if petlju da li nekoj Sari odgovara srbija kao opcija mesta za zivot, na osnovu parametara koje smo mi deklarisali.
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

//ovo su slucajevi kada se jednostavno postave neki uslovi kao sto su npr jezik i onda ukoliko je izabran neki drugi jezik izbacije neke druge stvari koje treba a ukoliko je izabran nas jezik kao u ovom primeru onda se izbacuje ono sto je po default a to je jezik koji smo mi izabrali
switch (language)
{
    case 'chinese':
    case 'mandarin':
        console.log('MOst number of native speakers!');
        break;
    case 'spanish':
            console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'srbija':
        console.log('Najjaci jezik ikada koji se zna');
        break;
        default:
            console.log('Great language too :D');

}


//opcija da se utvrdi da li je populacija srbije veca ili manja od odredjene norme, kao u ovom slucaju da li je veca ili menja od 33 koji predstavlja uslov 
console.log(
    `${country}'s population is ${population > 33 ? 'above': 'below'} average`,
);

//ovo gore je trebalo da bude klasican domaci zadatak



//odavde ide sledeca opcija za rad
 */ 



