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