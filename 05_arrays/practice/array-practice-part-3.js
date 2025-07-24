const ask = require('../../utils/inputHelper');


// array left rotation by k elem

// const arr = [1, 2, 3, 4, 5]
// console.log(arr)

// function rotateArrayByK(k) {
//   for (let j = 1; j <= k; j++) {
//     const copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
//   }
//   console.log(arr)
// }
// rotateArrayByK(4)


// const arr = [1, 2, 3, 4, 5]
// let k = Number(ask('Enter a number'))
// k  = k % arr.length

// reverse(arr, 0, k-1)
// reverse(arr, k, arr.length - 1)
// reverse(arr, 0, arr.length - 1)
// console.log(arr)

// function reverse(arr, i, j){
//   while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
//   }
// }



// linear search an array, if element found print the index else -1

// let target = Number(ask('Enter a target value'))
// const arr = [44, 5, 0, 6, 77, 9]

// let index = -1
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == target) {
//     index = i
//     break
//   }
// }
// if (index == -1) {
//   console.log('element not found')
// } else {
//   console.log(`Element found at ${index}rd index`)
// }




const arr = [4, 5, 6, 9, 12, 14, 20]
let s = arr[0]
let e = arr.length - 1
let m = (s + e) / 2
console.log(m);
