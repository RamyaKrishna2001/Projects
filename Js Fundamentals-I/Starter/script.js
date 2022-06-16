//let Keyword
/*let firstName = "Ramya"
console.log(typeof firstName)
console.log(firstName)

firstName="Macherla";
console.log(firstName)

//const Keyword
const lastName="krishna";
console.log(lastName)

const age=21;
console.log(age)

//var Keyword
var surName="Jangala"
console.log(surName)

var surName="sammeta"
console.log(surName)
*/

// let x = 12 + 45;
// x /= 10;
// console.log(x)


//-------------------------------------------------------------------
//CHALLENGE - 1
/*const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = marksBMI > johnBMI;

console.log("The BMI of Mark is", marksBMI);
console.log("The BMI of John is", johnBMI);
console.log(markHigherBMI);*/


//--------------------------------------------------------------------
//CHALLENGE - 2
/*const marksWeight = 78;
const marksHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

if (marksBMI > johnBMI) {
    console.log("Mark's BMI is higher than john");
}
else {
    console.log("john's BMI is higher than Mark's")
}

if (marksBMI > johnBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than Jhon's (${johnBMI})`)
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${marksBMI})`)
}*/


//-----------------------------------------------------------------------
//IF/ELSE STATEMENT EXAMPLE
// const age = 16;

// if (age >= 18) {
//     console.log("You are eligible for driving license🚗")
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`You need to wait for another ${yearsLeft} years to get your driving license,
//     Thank you🙂.`)
// }


//--------------------------------------------------------------------------
//CHALLENGE - 3
// const scoreDolphis = 96 + 108 + 89;
// const scoreKoalas = 88 + 91 + 110;

// const dolphinsAverageScore = scoreDolphis / 3;
// const koalasAverageScore = scoreKoalas / 3;

// console.log(scoreDolphis)
// console.log(scoreKoalas)
// console.log("Dolphins Average Score is", dolphinsAverageScore);
// console.log("Koalas Average Score is", koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log("Dolphins Won the Match 🎉");
// }
// else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log("The Match is Drawn");
// }
// else {
//     console.log("Kolas Won the Match 🎉");
// }

//BONUS- 1  
// const scoreDolphis = 97 + 112 + 101;
// const scoreKoalas = 109 + 95 + 123;
//BONUS- 2
// const scoreDolphis = 97 + 112 + 101;
// const scoreKoalas = 109 + 95 + 106;

/*const dolphinsAverageScore = scoreDolphis / 3;
const koalasAverageScore = scoreKoalas / 3;

console.log(scoreDolphis)
console.log(scoreKoalas)
console.log("Dolphins Average Score is", dolphinsAverageScore);
console.log("Koalas Average Score is", koalasAverageScore);

//BONUS- 1 CONDITIONS
/*if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolphins Won the Match 🎉");
}
else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log("Kolas Won the Match 🎉");
}
else if (dolphinsAverageScore === koalasAverageScore) {
    console.log("The Match is Drawn");
}*/

//BONUS- 2 CONDITIONS
/*if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolphins Won the Match 🎉");
}
else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log("Kolas Won the Match 🎉");
}
else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("The Match is Drawn🙂");
}
else {
    console.log("No team Wins the Match😢");
}*/


//-------------------------------------------------------------------
//CONDITIONAL OPERATOR
// const age = 16;
// const result = age >= 18 ? "I'm allowed into the Bars or Pubs😍" : "I'm not allowed into the Bars or Pubs😢";
// console.log(result)

//CHALLENGE - 4
// const billValue = 430;
// const tip_1 = billValue * (15 / 100);
// const tip_2 = billValue * (20 / 100);

// const tip = billValue >= 50 && billValue <= 300 ? tip_1 : tip_2;
// console.log(tip);
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)