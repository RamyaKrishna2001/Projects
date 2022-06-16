'use strict';

//FUNCTIONS
// function appleJuice(apples, milk, sugar) {
//     console.log(apples, milk, sugar)
//     const juice = `Juice with ${apples} apples, ${milk} of milk and ${sugar} of sugar
//     served to you!😊`;
//     return juice;
// }

// const result = appleJuice(5, '10ml', '2cubes')
// console.log(result)

//FUNCTIONS CALLING OTHER FUNCTIONS
/*function fruitCutter(fruits) {
    return fruits * 3;
}

function juiceMaker(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    return `Juice with ${applePieces} pieces of apple 🍎 and ${orangePieces} pieces
    of orange 🍊`;
}

console.log(juiceMaker(3, 4));
*/

//---------------------------------------------------------------------------
//CHALLENGE - 1
/*const calcAverage = (a, b, c) => (a + b + c) / 3;

const dolphinsScore = calcAverage(44, 23, 71);
const koalasScore = calcAverage(65, 54, 49);
console.log(`Average Score of Dolphins is ${dolphinsScore} and
 Koalas is ${koalasScore}`)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins won the Match👏 with (${avgDolphins} vs ${avgKoalas})`)
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas won the Match👏 with (${avgKoalas} vs ${avgDolphins})`)
    }
    else {
        console.log("No team wins....😔")
    }
}

checkWinner(dolphinsScore, koalasScore)
console.log(`Average score of Dolphins is ${calcAverage(85, 54, 41)} and
 Koalas is ${calcAverage(23, 34, 27)}`)
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27))
*/

//--------------------------------------------------------------------------
//ARRAYS
// let fruits = ['apple', 'mango', 'banana', 'orange'];
// console.log(fruits);

// let colors = new Array('blue', 'red', 'yellow', 'purple');
// console.log(colors);

// const array = ['ramya', 'samyu', 'manoj', 'pavan'];
// console.log(array)

// array.push(23);
// console.log(array)

//CHALLENGE - 2
// const calcTip = function (billValue) {
//     return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills);
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//----------------------------------------------------------------------------
//OBJECTS
// const ramya = {
//     firstName: "Ramya",
//     lastName: "Macherla",
//     birthYear: 2001,
//     job: "Js Developer",
//     location: "Hyderbad",
//     hasDriverLicense: true,

//     // calcAge: function () {
//     //     return 2030 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2030 - this.birthYear;
//         return this.age;
//     },

//     // getSummary: function () {
//     //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//     // }
// }

// console.log(ramya);
// console.log(ramya.calcAge())
// console.log(ramya.age)
// console.log(ramya['calcAge']())

//CHALLENGE
/*console.log(`${ramya.firstName} is a ${ramya.age}-year old ${ramya.job}, and
she has ${ramya.hasDriverLicense ? 'a' : 'no'} driver's license.`);*/
//OR
// console.log(ramya.getSummary())

//CHALLENGE - 3
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// console.log(john);
// console.log(john.calcBMI());

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// console.log(mark);
// console.log(mark.calcBMI());

// // john.calcBMI() > mark.calcBMI() ? console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`) :
// //     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`)

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
// }
// else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
// }

//-----------------------------------------------------------------------------------------
//ITERATIONS(FOR LOOP)
// const ramya = ['Ramya', 'Macherla', 2037 - 2001, 'Developer', ['samyu', 'pavan', 'manoj'], true];

// console.log('----ONLY STRINGS----')
// for (let i = 0; i < ramya.length; i++) {
//     if (typeof ramya[i] !== 'string') continue;

//     console.log(ramya[i], typeof ramya[i]);
// }

// console.log(ramya.length);

// console.log('---------------------------Printing elements of the array from the backward--------------------------')
// for (let i = ramya.length - 1; i >= 0; i--) {
//     console.log(i, ramya[i]);
// }

//WHILE LOOP

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is ended.....');
// }

//CHALLENGE - 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

// console.log(bills.length);
// for (let i = 0; i <= bills.length - 1; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);
// }
// console.log("Array of tips", tips);
// console.log("Array of totals", totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(totals));

//CHALLENGE - 5
// const temparature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (t1, t2) {
//   //merging the arrays
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(
//   [4, 6, -8, 3, 6, 11, -3, -5, 'error'],
//   [-2, -5, -7, 'error', 5, 12, 15, 8, 9]
// );
// console.log(amplitude);

//CHALLENGE - 6
// const forecastedMaxTemps1 = [17, 21, 23];
// const forecastedMaxTemps2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}'c in ${[i + 1]} days... `;
//   }
//   console.log('... ' + str);
// };

// printForecast(forecastedMaxTemps1);
// printForecast(forecastedMaxTemps2);

//short circuiting (&& operator)
// function A() {
//   console.log('called A');
//   return false;
// }
// function B() {
//   console.log('called B');
//   return true;
// }

// console.log(A() && B());

// const value = 20;
// const result = value ?? 10;
// console.log(result);

// const a = 0 || undefined;
// console.log(a);

// let b = 0;

// const result1 = false && true;
// console.log({ result1 });

// function A() {
//   console.log('A was called');
//   return undefined;
// }
// function B() {
//   console.log('B was called');
//   return false;
// }
// function C() {
//   console.log('C was called');
//   return 'foo';
// }

// console.log(A() ?? C());
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

// console.log(B() ?? C());
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated

//CODING CHALLENGE - 1

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const restaurant = {
//   starterMenu: ['chicken65', 'vegManchuria', 'prawns', 'crispyCorn'],
//   mainMenu: ['pizza', 'pasta', 'biryani'],
//   openingHours: {
//     [days[0]]: {
//       open: 12,
//       close: 12,
//     },
//     [days[2]]: {
//       open: 10,
//       close: 14,
//     },
//     [days[4]]: {
//       open: 9,
//       close: 15,
//     },
//   },
// };

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`);

// for (const day of days) {
//   //   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(
//     `on ${day}, ${open === 'closed' ? `we are ${open}` : `we open at ${open}`}`
//   );
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let str = `We are open for ${properties.length} days : `;

// for (const days of properties) {
//   str += `${days}, `;
// }
// console.log(str, '\n', 'and closed in remaining days');

// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} and we close at ${close}`);
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const scores = [...game.scored];
// // console.log({ scores });

// for (const [i, elem] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${elem}`);
//   //   console.log(elem, i);
// }

// const odds = Object.values(game.odds);
// console.log(odds);

// let average = 0;
// for (const odd of odds) average += odd;

// average /= odds.length;
// console.log(average);

// const entries = Object.entries(game.odds);
// console.log(entries);

// for (const [team, score] of entries) {
//   console.log(`Odd of ${team === 'x' ? 'draw' : `victory ${game[team]}`} : ${score}`);
// }

//MAPS : FUNDAMENTALS

// const rest = new Map();

// rest.set('name', 'Ramya');
// rest.set('age', 21);
// const hobbies = ['singing', 'dancing', 'readingBooks'];
// rest.set(hobbies, true).set(false, 'studying');

// console.log(rest);
// console.log(rest.get(hobbies));
// console.log(rest.get('name'));
// rest.delete('age');
// console.log(rest.size);
// console.log(rest);
// rest.clear();
// console.log(rest.size);

//WORKING WITH STRINGS - 2

// const firstName = 'rAmya';
// const nameLower = firstName.toLowerCase();
// const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
// console.log(nameCorrect);

// const announcement =
//   'All passangers come to boarding door 23. BOarding door 23!';

// const replaceTxt = announcement.replaceAll('door', 'gate');
// console.log(replaceTxt);

// console.log('I+am+a+very+good+girl'.split('+'));
// console.log('Ramya Krishna'.split(' '));

// const [firstName, lastName] = 'Ramya kishna'.split(' ');
// const nameJoin = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
// console.log(nameJoin);

// const msg = 'hi ';
// console.log(msg.repeat(5));

const words=['Some_Variable','underscore_case',' first_name ','calculate_AGE  ','delayed_departure']

const data = function (values) {

  for (const [i, v] of values.entries()) {
    //   console.log(i);
    const [first, second] = v.toLowerCase().trim().split('_');
    const newValue = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${newValue.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
};

data([...words])
// data('Some_Variable');
// data('underscore_case');
// data(' first_name ');
// data('calculate_AGE  ');
// data('delayed_departure');
