const ask = require('../../utils/inputHelper');

const n = Number(ask('enter a number'))

// for(let i=1; i<=n; i++){
//   for(let j=1; j<=5; j++){
//     process.stdout.write('* ')
//   }
//   console.log()
// }


//right angle triangle
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write('* ')
  }
  console.log()
}


//right angle triangle using numbes
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write(j+' ')
  }
  console.log()
}


//inverted right angle triangle
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-i; j++){
    process.stdout.write('* ')
  }
  console.log()
}