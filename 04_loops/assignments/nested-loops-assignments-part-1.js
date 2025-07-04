//right triangle star pattern
function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write('* ')
    }
    console.log()
  }
}

printRightTriangle(4)


//right triangle number pattern
function printRightTriangleNumbers(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + ' ')
    }
    console.log()
  }
}
printRightTriangleNumbers(4)


//right triangle alphabet pattern
function printRightTriangleAlphabets(n) {
  for (let i = 1; i <= n; i++) {
    let temp = 65
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(temp) + ' ')
      temp++
    }
    console.log()
  }
}
printRightTriangleAlphabets(4)


//inverted right triangle star pattern
function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write('* ')
    }
    console.log()
  }
}
printInvertedRightTriangle(4)