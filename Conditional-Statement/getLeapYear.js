const ask = require("../utils/inputHelper");

let year = Number(ask('Enter a year'))

  if((year%4===0 && year%100!==0) || year%400===0){
    console.log(`${year} is a Leap Year`)
  } else {
    console.log(`${year} is not a Leap Year`)
  }
