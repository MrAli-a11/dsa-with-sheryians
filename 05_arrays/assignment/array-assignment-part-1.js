// calculate sum and mean of array elements

function calculateSumAndMean(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  let mean = sum / n

  return [sum, mean.toFixed(1)]
}


// find the greatest elem and its index

function findGreatestElementAndIndex(arr) {
  let greatestVal = arr[0]
  let greatestValIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > greatestVal) {
      greatestVal = arr[i]
      greatestValIndex = i
    }
  }

  return [greatestVal, greatestValIndex]
}



// find the second greatest elem

function findSecondGreatestElement(arr) {
  let maxVal = arr[0]
  let secondMax = -Infinity
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] > secondMax && arr[j] !== maxVal) {
      secondMax = arr[j]
    }
  }
  return secondMax
}



// Reverse an Array (End to Start)

let arr = [1, 2, 3, 4, 5, 6]
let left = 0, right = arr.length - 1
while(left < right){
  let temp = arr[left]
  arr[left] = arr[right]
  arr[right] = temp
  left++
  right--
}
console.log(arr);



// Remove First Element in Array and Shift

let arr = [1, 2, 3, 4, 5]
let n = arr.length

for(let i = 0; i<n - 1; i++){
  arr[i] = arr[i + 1]
}
arr.length = n - 1
console.log(arr);

