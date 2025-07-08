//write a program that take two numbers and print their sum
function sum(a, b) {
  console.log(a+b)
}
sum(10, 20)


//greet the user
function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`)
}
greet('Ali', 19)


//swap two numbers
function swapNumbers(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b]
}
swapNumbers(5, 10)


//swap two numbers without third variables
function swapNumbers(a, b) {
  a = a+b;
  b = a-b;
  a = a-b;  
  return [a, b]
}
swapNumbers(20, 30)

