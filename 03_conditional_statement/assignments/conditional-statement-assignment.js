//find the greatest of two numbers
function findGreatest(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
findGreatest(55, 102)



//check if a number is even or odd
function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even'
  } else {
    return 'Odd'
  }
}
checkEvenOrOdd(54)



//check if user is a valid voter
function checkVoterEligibility(name, age) {
  if (age >= 18) {
    return `${name} is a valid voter.`
  } else {
    return `${name} is not a valid voter.`
  }
}
checkVoterEligibility('Ali', 16)



//find the greatest numbers amont three numbers
function findGreatestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a
  } else if (b >= a && b >= c) {
    return b
  } else {
    return c
  }
}
findGreatestOfThree(10, 654, 102)





//check if a year is a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 'Leap Year'
  } else {
    return 'Not a Leap Year'
  }
}
isLeapYear(2024)



//calculate final amount after discount
function calculateFinalAmount(amount) {
  if (amount <= 0) {
    return 0
  }

  let discount = 0;

  if (amount > 5000 && amount <= 7000) {
    discount = 5
  } else if (amount > 7000 && amount <= 9000) {
    discount = 10
  } else if (amount > 9000) {
    discount = 20
  }
  return amount * (1 - discount / 100)
}
calculateFinalAmount(5600)




//calculate electricity bill based on unit
function calculateElectricityBill(unit) {
  let amount = 0

  if (unit > 400) {
    amount = (unit - 400) * 13
    unit = 400
  }

  if (unit > 200 && unit <= 400) {
    amount = amount + (unit - 200) * 8
    unit = 200
  }

  if (unit > 100 && unit <= 200) {
    amount = amount + (unit - 100) * 6
    unit = 100
  }

  if (unit > 0 && unit <= 100) {
    amount = amount + (unit * 4.2)
  }
  return amount.toFixed(1);
}
calculateElectricityBill(360)