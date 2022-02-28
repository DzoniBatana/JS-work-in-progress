// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
//max = 3
//BITNO BITNO BITNO

//ovo dole je ista funkcija kao i gore samo sto jednostavno se koriste izvori iz dva niza, tacnije se spajaju 2 niza u jedan i izvlace se informacije koje su nam potrebne iz njih
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //ovde je bio BUG ali je sada reseno, prompt funckija uvek vracca string, samo je trebalo da se string konvertuje u number i sve je reseno
    value: Number(prompt('Degrees celsius:')),
  };
  console.log(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

*/

const data1 = [177, 0, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast1 = function () {
  console.log(
    `"... ${data1[0]}°C in 1 days ... ${data1[1]}°C in 2 days ... ${data1[2]}°C in 3 days ..."`
  );
};

console.log(printForecast1());

const printForecast = function (arr) {};
