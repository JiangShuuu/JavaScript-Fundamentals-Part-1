// let MarkWeights = 95
// let MarkTall = 1.88

// let JohnWeights = 85
// let JohnTall =1.76

// MarkBmi = MarkWeights / MarkTall ** 2
// JohnBmi = JohnWeights / JohnTall ** 2

// if (MarkBmi < JohnBmi) {
//     console.log ('Mark won');
//     console.log (MarkBmi);
// } else {
//     console.log ('John won');
//     console.log (JohnBmi);
// } 

// const inputYear = '1991' ;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// num =Number( prompt ("what's your size?"));
// console.log (num);
// console.log (typeof num);

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasDriversLicense);
// console.log(!hasDriversLicense);


// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('go to drive!');
// } else {
//     console.log('someone else should drive...');
// }

// const scoreDolphins = (96 + 108+ 89) / 3;
// const scoreKoals =(88 + 91+ 110) / 3;

// if (scoreDolphins > scoreKoals){
//     console.log ('Dolphins win');
// } else {
//     console.log ('Koalas win');
// }


// const day = 'thursday';

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory video');
//         break;
//     case 'wednesday':
//     case 'thursd ay':
//         console.log('Write code examples');
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

const age = 3;
// age >= 18 ? console.log ('Ilike to drink wine'):
// console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

const bill = 430
console.log(`The bill was ${bill}, the tip was ${tip = bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.2}, and the total value ${bill + tip}`)