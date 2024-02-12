window.addEventListener("load", () => {
  disableButtons();
});

function disableButtons() {
  let RPSButtons = document.querySelectorAll("#left > .choices > button");
  RPSButtons.forEach((button) => {
    button.disabled = true;
  });
}

start_button.addEventListener("click", () => {
  removeStartButton();
  addTextBox();
  newGame();
  addEventListenerToButtons();
});

function removeStartButton() {
  text_container.removeChild(start_button);
}

function addTextBox() {
  const textbox = document.createElement("p");
  textbox.setAttribute("id", "textbox");
  text_container.appendChild(textbox);
}

function newGame() {
  removeGrayScale();
  enableButtons();
  updatePlayerScore(0);
  updateComputerScore(0);
}

function removeGrayScale() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.style.filter = "grayscale(0)";
  });
}

function enableButtons() {
  let RPSButtons = document.querySelectorAll("#left > .choices > button");
  RPSButtons.forEach((button) => {
    button.disabled = false;
  });
}

function updatePlayerScore(score) {
  const playerScoreDisplay = document.querySelector("#left > .score");
  playerScoreDisplay.textContent = score;
}

function updateComputerScore(score) {
  const computerScoreDisplay = document.querySelector("#right > .score");
  computerScoreDisplay.textContent = score;
}

function addEventListenerToButtons() {
  const RPSButtons = document.querySelectorAll("#left > .choices > button");
  RPSButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      playRound(event);
    });
  });
}

function playRound(event) {
  const playerChoice = getPlayerChoice(event);
  const computerChoice = getComputerChoice();
  compareChoices(playerChoice, computerChoice);
  checkForWinningScore(5);
}

function getPlayerChoice(event) {
  return event.currentTarget.className;
}

function getComputerChoice() {
  const weaponChoice = ["rock", "scissors", "paper"];
  return weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    tieRound(playerChoice, computerChoice);
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    winRound(playerChoice, computerChoice);
  } else if (
    (playerChoice == "rock" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "rock")
  ) {
    loseRound(playerChoice, computerChoice);
  }
}

function tieRound(playerChoice, computerChoice) {
  textbox.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. It's a tie.`;
}

function winRound(playerChoice, computerChoice) {
  textbox.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You win this round.`;
  increasePlayerScore();
}

function increasePlayerScore() {
  updatePlayerScore(currentPlayerScore() + 1);
}

function currentPlayerScore() {
  const playerScoreDisplay = document.querySelector("#left > .score");
  return parseInt(playerScoreDisplay.textContent);
}

function loseRound(playerChoice, computerChoice) {
  textbox.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. You lose this round.`;
  increaseComputerScore();
}

function increaseComputerScore() {
  updateComputerScore(currentComputerScore() + 1);
}

function currentComputerScore() {
  const computerScoreDisplay = document.querySelector("#right > .score");
  return parseInt(computerScoreDisplay.textContent);
}

function checkForWinningScore(winningScore) {
  if (currentPlayerScore() == winningScore) {
    playerWin(winningScore);
    endGame();
  } else if (currentComputerScore() == winningScore) {
    playerLose(winningScore);
    endGame();
  }
}

function playerWin(winningScore) {
  showPlayerWinMessage(winningScore);
  showWinAvatar();
  playWinSound();
}

function showPlayerWinMessage(winningScore) {
  let finalResults = document.createElement("p");
  finalResults.setAttribute("id", "final_results");
  finalResults.textContent = `You got ${winningScore} points! You're a winner.`;
  text_container.appendChild(finalResults);
}

function showWinAvatar() {
  const playerAvatar = document.querySelector("#left > .avatar img");
  playerAvatar.src = "./images/win.png";
}

function playWinSound() {
  const winSound = new Audio("./music/win.mp3");
  winSound.play();
}

function playerLose(winningScore) {
  showPlayerLoseMessage(winningScore);
  showLoseAvatar();
}

function showPlayerLoseMessage(winningScore) {
  let finalResults = document.createElement("p");
  finalResults.setAttribute("id", "final_results");
  finalResults.textContent = `Computer got ${winningScore} points! You lose.`;
  text_container.appendChild(finalResults);
}

function showLoseAvatar() {
  const playerAvatar = document.querySelector("#left > .avatar img");
  playerAvatar.src = "./images/lose.png";
}

function playLoseSound() {
  const loseSound = new Audio("./music/lose.mp3");
  loseSound.play();
}

function endGame() {
  disableButtons();
  addGrayScale();
  createResetButton();
}

function addGrayScale() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.style.filter = "grayscale(1)";
  });
}

function createResetButton() {
  let resetButton = document.createElement("button");
  resetButton.textContent = "Reset Game";
  resetButton.setAttribute("id", "reset_button");
  text_container.appendChild(resetButton);
}
