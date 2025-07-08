const ask = require("../utils/inputHelper");

// let n = Number(ask('Enter a number'))
// for(let i = 1; i<=n; i++){
//   console.log('YA ALI')
// }

//print natural number up to n
// let n = Number(ask('Enter a number'))

// for(let i = 1; i<=n; i++){
//   console.log(i)
// }

//print natural number n to 1
// let n = Number(ask('Enter a number'))

// for(let i = n; i>=1; i--){
//   console.log(i)
// }

//take a number as input and print its table
// const n = Number(ask('Enter a number'))
// for(let i = 1; i<=10; i++){
//   console.log(`${n} * ${i} = ${(n*i)}`)
// }

//sum up to n terms
// const n = Number(ask('Enter a number'))
// let sum = 0
// for(let i = 1; i<=n; i++){
//   sum = sum + i
// }
// console.log(`Sum of ${n} terms is: ${sum}`)


//factorial of a number
// const n = Number(ask('Enter a number'))
// let factorialNum = 1
// for(let i = 1; i<=n; i++){
//   factorialNum = factorialNum * i
// }
// console.log(`factorial of ${n} is: ${factorialNum}`)


//print the sum of all even & odd numbers in a range separately
// const n = Number(ask('Enter a number'))
// let evenSum = 0, oddSum = 0
// for(let i = 1; i<=n; i++){
//   if(i%2===0){
//     evenSum = evenSum + i
//   }else{
//     oddSum = oddSum + i
//   }
// }

// console.log(`sum of even numbers is: ${evenSum} & sum of odd numbers is ${oddSum}`)

//print all the factors of a number
// const n = Number(ask('Enter a number'))
// for(let i = 1;i<=n/2; i++){
//   if(n % i === 0){
//     console.log(i)
//   }
// }
// console.log(n)

//write a program to know is given number is prime number
const n = Number(ask('Enter a number'))
let isPrime = true
for(let i = 2;i<=n/2;i++){
  if(n % i === 0){
    isPrime = false
    break
  }
}
if(isPrime) console.log(`${n} is a prime number`)
  else console.log(`${n} is not a prime number`)