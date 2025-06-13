const ask = require("../utils/inputHelper");

const movie = ask('Enter the movie name')
const rating = parseFloat(ask('Enter the rating'))
let message = ''

if(rating<0 || rating>5){
  console.log('Invalid rating! Please enter a rating between 0 and 5...')
} else if(rating<=2){
  message = 'Flop'
} else if(rating<=3.4){
  message = 'Semi-hit'
} else if(rating<=4.5){
  message = 'Hit'
} else {
  message = 'Super Hit'
  console.log(`${movie} is a ${message} movie`)
}
 
