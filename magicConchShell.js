let userName = prompt('Enter your name: ');

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = prompt('What would you like to ask the Magic Conch Shell?');

console.log(`${userName} asks \'${userQuestion}\'. What will the Magic Conch Shell decide?`);

let randomNumber = Math.floor(Math.random() * 8);
let conchShell = '';

switch (randomNumber) {
  case 0:
  console.log('I don't think so.');
  break;
  case 1:
  console.log('Neither.');
  break;
  case 2:
  console.log('Nothing.');
  break;
  case 3:
  console.log('Yes.');
  break;
  case 4:
  console.log('Maybe some day.');
  break;
  case 5: 
  console.log('Try asking again.');
  break;
  case 6:
  console.log('No.');
  break;
  case 7:
  console.log('Nooooo.');
  break;
}
console.log(conchShell);
