//functional variables
let userInput;
let userWins = 0;
let userLosses = 0;
let cpuInput;
const options = ['rock','paper','scissors']

//DOM variables
let scoreDisplayArr = [] = document.querySelectorAll(".score");
let selectionArr = [] = document.querySelectorAll(".selection");
let roundResultDisplay = document.querySelector(".roundResult");
let userChoice = document.querySelector(".choiceContainer");
let play = document.querySelector(".play");


play.addEventListener("click", ()=>{
  if (userInput !== ""){
    playBestOfThree();
  };
  if (userWins == 3){
    console.log(`***** YOU WIN, HUMANITY IS SAVED *****`);
    roundResultDisplay.textContent = "YOU WIN!"
  }
  else {
    console.log(`***** YOU LOSE, HUMANITY IS DOOMED *****`)
    roundResultDisplay.textContent = "YOU LOSE!"
  };
});




function playBestOfThree(){
  while(userWins < 3 && userLosses < 3){
    console.log(playRound());
  }
};

function playRound(){
    
  //get user input
  inputCheckFlag = true;
  while (inputCheckFlag == true){
    // userInput = prompt('Rock, Paper or Scissors?');
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