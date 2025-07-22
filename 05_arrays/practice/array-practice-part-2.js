// second max elem

// const arr = [12, 45, 322, 99, 322, 312,]
// let maxVal = Math.max(arr[0], arr[1])
// let secondMaxVal = Math.min(arr[0], arr[1])

// for(let i = 2; i<arr.length; i++){
//   if(arr[i] > maxVal){
//     secondMaxVal = maxVal
//     maxVal = arr[i]
//   }else if(arr[i] > secondMaxVal && arr[i] !== maxVal){
//     secondMaxVal = arr[i]
//   }
// }

// console.log(`Max value is: ${maxVal} and second max value is: ${secondMaxVal}`);




// reverse array of elem using extra empty array

// const arr = [1, 2, 3, 4, 5, 6]
// let tempArr = new Array(arr.length)

// let i = 0
// for(let j = arr.length - 1; j>=0; j--){
//   tempArr[i] = arr[j]
//   i++
// }
// console.log(tempArr);



// reverse array of elem without any extra space (two pointer algo)

// const arr = [1, 2, 3, 4, 5, 6, 7]
// let i = 0
// let j = arr.length - 1

// while(i<j){
//   let temp = arr[i]
//   arr[i] = arr[j]
//   arr[j] = temp
//   i++
//   j--
// }
// console.log(arr);



// move all zeroes to left and all ones to right

// const arr = [0, 1, 1, 0, 0, 1, 1, 0]
// let i = 0
// let j = 0

// while(i<arr.length){
//   if(arr[i]===0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//   }
//   i++
// }
// console.log(arr);



// array left rotation by 1

// const arr = [1, 2, 3, 4, 5]
// console.log(arr);
// const temp = arr[0]

// for(let i = 0; i<arr.length - 1; i++){
//   arr[i] = arr[i + 1]
// }
// arr[arr.length - 1] = temp
// console.log(arr);



// array right rotation by 1

const arr = [1, 2, 3, 4, 5, 6, 7, 5, 99]
const temp = arr[arr.length - 1]

for(let i = arr.length - 1; i>0; i--){
   arr[i] = arr[i - 1]
}
arr[0] = temp
console.log(arr);











