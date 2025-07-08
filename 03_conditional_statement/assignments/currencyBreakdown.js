const ask = require("../../utils/inputHelper");

let amount = parseInt(ask('Enter the amount'))

const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

if(amount>0){
  console.log(`\nBreakdown of ₹${amount}:\n`)
  for (let note of denominations){
  let count = Math.floor(amount / note)
  if(count>0){
    console.log(`${note} x ${count} = ${note * count}`)
    amount = amount % note
  } 
}
} else{
  console.log(`${amount} is incorrect! enter above 0`)
}


