const ask = require("../utils/inputHelper");


//do-while loop
// let userInput;

// do{
//   console.log('hey')
//   userInput = ask('say yes or no').toLowerCase()
// }while(userInput === 'yes')


//guess the number
// const computerNum = Math.round(Math.random() * 100) + 1
// let userInput

// do{
//   userInput = Number(ask('guess the correct number in b/w 1 - 100'))
//   if(isNaN(userInput) || userInput<0 || userInput>100){
//     console.log('please enter valid number')
//     continue
//   }
  
//   if(userInput>computerNum){
//     console.log('input number is too large');
//   }else if(userInput<computerNum){
//     console.log('input number is too small');
//   }else{
//     console.log('Congrats! You win🎉🎉');
//   }
// }while(userInput !== computerNum)


//simple calculator
// let userInput;
// do{
//   const num1 = Number(ask('enter the first number'))
//   const num2 = Number(ask('enter the  second number'))
//   const operator = ask('enter a valid operator: (+, -, *, /)')

//   switch(operator){
//     case '+':
//       console.log(num1 + num2);
//       break
    
//     case '-':
//       console.log(num1 - num2);
//       break

//     case '*':
//       console.log(num1 * num2);
//       break
        
//     case '/':
//       if(num2 !== 0){
//         console.log(num1 / num2);
//       }else{
//         console.log('please enter valid number'); 
//       }
//       break

//     default:
//       console.log('please enter a valid operator');   
//   }
//   userInput = ask('Want to do more calculation, say: yes/no').toLowerCase()
// }while(userInput === 'yes')


//project restaurant
let userInput;
do{
  const menuNum = Number(ask(
    `\nPlease enter: 
    1 for Starter
    2 for Drinks
    3 for Desserts
    4 for exit`))

  switch(menuNum){
    case 1:
      let validStarter = false
      do{
        const starterItem = ask(`\nChoose a Starter:
          - Paneer Tikka
          - Chicken Seekh
          - Dahi Kebabs
          - Chicken Kebabs
          Your choice (or type 'back' to return): `)
          .toLowerCase()

        switch(starterItem){
          case 'paneer tikka':
          case 'chicken seekh':
          case 'dahi kebabs':
          case 'chicken kebabs':
            console.log(`You choose: ${starterItem}`)
            validStarter = true
            break
          case 'back':
            validStarter = true
            break  
          default:
            console.log('Invalid Starter! Try again') 
        }
      }while(!validStarter)
      break
      
    case 2:
      console.log('Drinks');
      break  
    
    case 3:
      console.log('Desserts');
      break
    case 4:
      console.log('Exit');
  }

  userInput = ask(`\nsay! 'yes' to go back to main menu or 'no' to exite`)
}while(userInput === 'yes')

console.log('Good bye! Visit again soon👋👋👋')  

