const ask = require("../utils/inputHelper");

//check if ISBN number is valid or not
// const userInput = (ask('Enter a 10 digit valid ISBN number'))
// const isbnNum = userInput.split('').map(Number)

// let sum = 0
// isbnNum.forEach((elem, idx)=>{
//   sum = sum + (elem*(idx + 1))
// })

// if(sum % 11 === 0){
//   console.log(`${userInput}: is a valid ISBN`)
// } else{
//   console.log(`${userInput}: is not a valid ISBN`)
// }

//GCD finder
function findGCD(a, b){
  while(b !== 0){
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

console.log(findGCD(45, 40))
