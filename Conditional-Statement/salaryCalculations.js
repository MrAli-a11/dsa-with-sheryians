const ask = require("../utils/inputHelper");

const gender = ask('Enter your gender')
const yearOfService = Number(ask('Enter year of service'))
const qualification = ask('Enter your qualification')

let salary = 0

  if(gender==='Male' && yearOfService>=10 && qualification==='Post Graduate'){
    salary = 15000
  } else if(gender==='Male' && yearOfService>=10 &&  qualification==='Graduate'){
    salary = 10000
  } else if(gender==='Male' && yearOfService<10 &&  qualification==='Post Graduate'){
    salary = 10000
  } else if(gender==='Male' && yearOfService<10 &&  qualification==='Graduate'){
    salary = 7000
  } else if(gender==='Female' && yearOfService>=10 && qualification==='Post Graduate'){
    salary = 12000
  } else if(gender==='Female' && yearOfService>=10 && qualification==='Graduate'){
    salary = 9000
  } else if(gender==='Female' && yearOfService<10 && qualification==='Post Graduate'){
    salary = 10000
  } else if(gender==='Female' && yearOfService<10 && qualification==='Graduate'){
    salary = 6000
  } else {
    console.log('Invalid input, please check input...')
  }

  console.log(salary)
  


