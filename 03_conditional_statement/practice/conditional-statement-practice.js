const ask = require('../../utils/inputHelper');


//leap year
// const year = Number(ask('enter a year'))
// if((year%4===0 && year%100!==0) || (year%400===0)){
//   console.log(`${year}, is a leap year`)
// }else{
//   console.log(`${year}, is not a leap year`)
// }



//shop discount
// const amount = Number(ask('enter your amount'))
// let discount = 0
// if(amount>=0 && amount<=5000){
//   discount = 0
// }else if(amount>5000 && amount<=7000){
//   discount = 5
// }else if(amount>7000 && amount<=9000){
//   discount = 10
// }else if(amount>9000){
//   discount = 20
// }else{
//   console.log('Invalid input')
// }

// console.log(`Your amount after discount is: ${amount - (discount*amount/100)}`)



//electricity bill
let unit = Number(ask('enter your unit'))
let amount = 0
if(unit>400){
  amount = (unit - 400) * 13
  unit = 400
}
if(unit>200 && unit<=400){
  amount = amount + (unit - 200) * 8
  unit = 200
}
if(unit>100 && unit<=200){
  amount = amount + (unit - 100) * 6
  unit = 100
}
amount = amount + (unit*4.2)

console.log(`Your amount as per unit after discount is: ${amount}`)