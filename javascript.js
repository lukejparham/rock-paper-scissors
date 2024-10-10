let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const ComputerScoreSpan = document.querySelector(".computer-score");
const restartButton = document.querySelector(".restart-btn");
const container = document.querySelector(".container");

const computerPlay = () => {
  const arrOfChoices = ["rock", "paper", "scissors"];
  const randonNum = Math.floor(Math.random() * arrOfChoices.length);
  return arrOfChoices[randonNum];
};

const playRound = (playerSelection, computerSelection) => {
  outcomeDiv.innerHTML = "";
  const p = document.createElement("p");
  if (playerSelection === computerSelection) {
    p.innerText = `You tied! You both picked ${playerSelection}`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    p.innerText = "You lost! Rock crushes scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    p.innerText = "You won! Scissors cuts paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    p.innerText = "You lost! Paper covers rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    p.innerText = "You won! Rock crushes scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    p.innerText = "You lost! scissors cuts paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    p.innerText = "You won! paper covers rock";
    outcomeDiv.appendChild(p);
  }
};

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.innerText = `You won ${playerScore} to ${compScore}. Great job beating the computer!`;
    outcomeDiv.appendChild(h2);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    restartButton.style.display = "block";
  } else if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.innerText = `You lost ${playerScore} to ${compScore}. The computer beat you!`;
    outcomeDiv.appendChild(h2);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    restartButton.style.display = "block";
  }
};

const updateScores = (playerScore, compScore) => {
  playerScoreSpan.innerText = `Player score: ${playerScore}`;
  ComputerScoreSpan.innerText = `Computer score: ${compScore}`;
};

rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScores(playerScore, compScore);
  checkForWinner(playerScore, compScore);
});

const restartGame = () => {
  playerScore = 0;
  compScore = 0;
  playerScoreSpan.innerText = "Player score: ";
  ComputerScoreSpan.innerText = "Computer score: ";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
};

restartButton.addEventListener("click", restartGame);

/*const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose what to throw",
      "Rock,Paper,Scissors"
    ).toLowerCase();
    const computerSelection = computerPlay(); 
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > compScore) {
    return "You beat the computer!";
  } else if (playerScore < compScore) {
    return "You got beat buy a computer!";
  } else {
    return "You tied with computer!";
  }
};

console.log(game());*/
