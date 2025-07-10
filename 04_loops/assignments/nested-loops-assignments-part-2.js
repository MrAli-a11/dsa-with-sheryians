//mirror right triangel - star pattern
function printMirroredRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write('  ')
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write('* ')
    }
    console.log()
  }
}
printMirroredRightTriangle(5)



// V-Shape pattern
function printVShapePattern(n) {
  if (n >= 3) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= (n * 2) - 1; j++) {
        if (i == j || i + j == n * 2) {
          process.stdout.write('*')
        } else {
          process.stdout.write(' ')
        }
      }
      console.log()
    }
  }

}
printVShapePattern(6)



// X-Shape pattern
function printXShapePattern(n) {
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i == j || i + j == n + 1) {
          process.stdout.write('*')
        } else {
          process.stdout.write(' ')
        }
      }
      console.log()
    }
  }
}
printXShapePattern(7)