//functional variables
let userInput;
let userWins = 0;
let userLosses = 0;
let cpuInput;
const options = ['rock','paper','scissors']
let replayFlag = false;

//DOM variables
let scoreDisplayArr = [] = document.querySelectorAll(".score");
let selectionDisplayArr = [] = document.querySelectorAll(".selection");
let roundResultDisplay = document.querySelector(".roundResult");
let userChoice = document.querySelector(".choiceContainer");
let play = document.querySelector(".play");

//rock, paper, or scissors buttons
userChoice.addEventListener("click", (e)=>{
  userInput = e.target.className;

  searchingIndex = options.indexOf(userInput);
  let choice = options[searchingIndex]; 

  //0 = user input
  selectEmoji(choice, 0);
  play.disabled = false;
});

//play button
play.addEventListener("click", ()=>{
  if (replayFlag){
    resetGame();
  }
  else if (userInput !== ""){
    playRound();
  }
  if (userWins === 3){
    roundResultDisplay.textContent = "YOU WIN!";
    play.textContent = "Replay?";
    replayFlag = true;
  }
  if (userLosses === 3) {
    roundResultDisplay.textContent = "YOU LOSE!";
    play.textContent = "Replay?";
    replayFlag = true;
  }
});


//play round of rock, paper, scissors
function playRound(){
  //get random cpu input
  cpuInput = options[getRandomInt(0,3)];
  //1 = cpu input
  selectEmoji(cpuInput, 1);

  //compare inputs, add Win or Loss
  if (userInput === cpuInput){
    roundResultDisplay.textContent = "Round Tie";
  }
  else if(userInput == "rock" && cpuInput == "scissors" || userInput == "paper" && cpuInput == "rock" || userInput == "scissors" && cpuInput == "paper"){
    userWins++;
    scoreDisplayArr[0].textContent = userWins;
    roundResultDisplay.textContent = "Round Win";
  }
  else{
    userLosses++;
    scoreDisplayArr[1].textContent = userLosses;
    roundResultDisplay.textContent = "Round Loss";
  }
};

//get random int
function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min) + min);
};

function selectEmoji(choice, user){
  switch (choice){
    case "rock":{
      selectionDisplayArr[user].textContent = "🪨";
      break;
    } 
    case "paper":{
      selectionDisplayArr[user].textContent = "📃";
      break;
    }
    case "scissors":{
      selectionDisplayArr[user].textContent = "✂️";
      break;
    }
    default:{
      break;
    }
  };
}

//reset game
function resetGame(){
  userWins = 0;
  userLosses = 0;
  userInput = "";
  scoreDisplayArr[0].textContent = 0;
  scoreDisplayArr[1].textContent = 0;
  roundResultDisplay.textContent = "Make your selection...";
  play.textContent = "Play";
  play.disabled = true;
  selectionDisplayArr[0].textContent = "❓";
  selectionDisplayArr[1].textContent = "❓";
  replayFlag = false;
}