//sum of two integer
const a = 10
const b = 10
console.log(a+b);


//string + string = (concatenation)
const x = 'hello'
const y = 'world'
console.log(x+y)


//sum of two numbers with a message
const a = 10;
const b = 10
console.log(`sum of ${a} and ${b} is: ${a+b}`)


//type coercion
const num1 = 5
const num2 = '2'
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)


//accept and print the answer 
const userAge = Number(prompt('enter your age'))
console.log(userAge)


//swap two variables
let a = 10
let b = 20

//1. swap two variables using an extra variable
let temp = a
a = b
b = temp
console.log(a, b)

//2. swap two variables using mathematic calc
a = a + b
b = a - b
a = a - b
console.log(a, b)

//3. swap two variables using destructuring assignment
[a, b] = [b, a]
console.log(a, b)


//operators and their questions

//arithmetic operators (+, -, *, /, %)
console.log(5%2) //1
console.log(10/3) //3.3333

//unary operator
  let a = 20

  //pre and post increament
  console.log(a++ + ++a) //42

  //pre and post decreament
  console.log(a-- + --a) //42



