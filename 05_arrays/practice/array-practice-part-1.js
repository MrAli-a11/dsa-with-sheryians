const ask = require('../../utils/inputHelper');

// let n = Number(ask('enter a number'))
// let copy = n
// let ans = 0
// while(n>0){
//   const dig = n%10
//   let fact = 1
//   for(let i = 1; i<=dig; i++){
//     fact = fact * i
//   } 
//   ans = ans + fact
//   n = Math.floor(n/10)
// }

// if(copy===ans) console.log(`${copy} is a strong number`);
// else console.log(`${copy} is not a strong number`);


// array methods...
// let arr = [10, 5, 2]
// console.log(arr)

// // add an element in last 
// arr.push(true)
// console.log(arr)

// // delete an element from last
// arr.pop()
// console.log(arr)

// // delete an element from first
// arr.shift()
// console.log(arr);

// // add an element at first
// arr.unshift('Ali', 'Khan')
// console.log(arr);

// // print the length of an array
// console.log(arr.length)

// // assign value to a particular index
// arr[10] = '*'
// console.log(arr);

// // create an empty array 
// let arrr = new Array(3)
// console.log(arrr);

// sum of array's element
const n = Number(ask('enter array element'))
const arr = new Array(n)

let sumOfArray = 0
for(let i = 0; i<arr.length; i++){
  arr[i] = Number(ask('enter value of array element'))
  sumOfArray += arr[i]
}
console.log(sumOfArray);


// max element of an array
const arr = [5, 4, 66, 99, 5, 2, 1, 875]
let max = arr[0]

for(let i = 1; i<arr.length; i++){
  if(arr[i] > max){
    max = arr[i]
  }
}
console.log(max);



// min element of an array
const arr = [4, 5, 1, 3, 0, 99, 2]
let min = arr[0]

for(let i = 1; i<arr.length; i++){
  if(arr[i] < min){
    min = arr[i]
  }
}
console.log(min);





