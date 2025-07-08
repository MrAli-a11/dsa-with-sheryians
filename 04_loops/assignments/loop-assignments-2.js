const ask = require("../utils/inputHelper");

//difference between syntax and concept of for loop, while loop and do-while loop

//for loop
// declare/initialize, condition, change
// for(let i = 1; i<=10; i++){

// }

// while loop
// declare/initialize
// while(condition){
//   change
// }

//print sum of digit
// let n = Number(ask('Enter a numer'))
// let sum = 0
// while(n>0){
//   let rem = n%10
//   sum = sum + rem
//   n = Math.floor(n/10)
// }

// console.log(sum)

//reverse the number
// let n = Number(ask('enter a number'))

// let reverse = 0
// while(n>0){
//   let rem = n%10
//   reverse = (reverse*10) + rem
//   n = Math.floor(n/10)
// }
// console.log(reverse)


//find the automorphic number
// let n = Number(ask('enter a number'))
// let copy = n;
// let sq = n * n;

// let count = 0;
// while(n>0){
//   count++;
//   n = Math.floor(n/10)
// }
// if(sq%Math.pow(10, count)==copy) console.log(`${copy} is a automorphic number`)
//   else console.log(`${copy} is not a automorphic number`)


//switch case
let n = Number(ask('enter a number'))

switch(n){
  case 1: console.log('Monday')
  break
  case 2: console.log('Tuesday')
  break
  case 3: console.log('Wednesday')
  break
  default: console.log('Sunday')
}