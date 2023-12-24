
let userInput;
let userWins = 0;
let userLosses = 0;
let cpuInput;
let options = ['rock','paper','scissors']


playBestOfThree();

if (userWins == 3){
  console.log(`***** YOU WIN, HUMANITY IS SAVED *****`)
}
else {
  console.log(`***** YOU LOSE, HUMANITY IS DOOMED *****`)
}


function playBestOfThree(){
  while(userWins < 3 && userLosses < 3){
    console.log(playRound());
  }
};

function playRound(){
    
  //get user input
  inputCheckFlag = true;
  while (inputCheckFlag == true){
    userInput = prompt('Rock, Paper or Scissors?');
    userInput = userInput.toLowerCase();
    //check if correct input
    checkUserInput(userInput);
  }

  //get random cpu input
  cpuInput = options[getRandomInt(0,2)];

  //compare inputs, add Win or Loss
  if (userInput === cpuInput){
    return `TIE! You chose: ${userInput}, the CPU chose: ${cpuInput}\nWINS: ${userWins} \nLOSSES: ${userLosses}\n---------------------------`;
  }
  else if(userInput == "rock" && cpuInput == "scissors" || userInput == "paper" && cpuInput == "rock" || userInput == "scissors" && cpuInput == "paper"){
    userWins++;
    return `You WIN! You chose: ${userInput}, the CPU chose: ${cpuInput}\nWINS: ${userWins}\nLOSSES: ${userLosses}\n---------------------------`;
  }
  else{
    userLosses++;
    return `You LOSE! You chose: ${userInput}, the CPU chose: ${cpuInput}\nWINS: ${userWins}\nLOSSES: ${userLosses}\n---------------------------`;
  }
};

function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min) + min);
};

function checkUserInput(input) {
  switch (input){
    case "rock": {
      inputCheckFlag = false;
      break;
    };
    case "paper": {
      inputCheckFlag = false;
      break;
    };
    case "scissors": {
      inputCheckFlag = false;
      break;
    };
    default: {
      alert("ฅ^•ﻌ•^ฅ Bean say you can't submit that answer")
      break;
    };
  };
};