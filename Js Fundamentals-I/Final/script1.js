//Assignment-1
const country = 'India';
const continent = 'Asia';
let population = 16;

console.log('Iam from', country);
console.log(`I live in ${continent} continent`);
console.log('The population in my country is', population);

//Assignment-2
const isIland = false;
let language;
console.log(typeof isIland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Assignment - 3
language = 'Telugu';
console.log('The language spoken in our country is', language);

//Assignment - 4
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
const avgPopulatn = 33;
console.log(population < avgPopulatn);
let description =
  country +
  ' is in ' +
  continent +
  ',and its ' +
  population +
  ' million people speak ' +
  language;
console.log(description);

//Assignment - 5
description = `'${country} is in ${continent}, and its ${population} million people speak ${language}'`;
console.log(description);
