const ask = require('../../utils/inputHelper');

//math functions
console.log(Math.ceil(10.1))
console.log(Math.floor(10.9))
console.log(Math.round(10.6))
console.log(Math.abs(-6))
console.log(Math.trunc(10.656546554))
console.log(Math.pow(5, 2)) // 5^2
console.log(Math.sqrt(36))
console.log(Math.cbrt(62))
console.log(Math.max(62, 55, 87, 10))
console.log(Math.min(10, 5, 66, 23))
console.log(Math.random())

let x = 165.54680
console.log(x.toFixed(2))



//math problems

//calculate compound interest
const p = Number(ask('enter principle amount'))
const r = Number(ask('enter rate of interest'))
const t = Number(ask('enter tenure'))

console.log((p*Math.pow(1 + r/100, t)) - p)



//generate otp
console.log(Math.floor(Math.random()*9000 + 1000))


//calculate area of triangle
const a = Number(ask('enter a number'))
const b = Number(ask('enter a number'))
const c = Number(ask('enter a number'))
if(a + b <= c || a + c <= b || c + b <= a){
  console.log('not possible')
}else{
  let s = (a+b+c)/2
  console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)))
}



//circumfrence of circle
const r = Number(ask('enter a number'))
console.log(2*Math.PI*r)