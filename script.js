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

function playRockPaperScissors() {
  let playerScore = 0;
  let computerScore = 0;

  function getPlayerChoice() {
    return prompt("Please type in Rock, Paper or Scissors");
  }

  function getCompChoice() {
    const weaponChoice = ["Rock", "Scissors", "Paper"];
    return weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
  }

  function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getCompChoice();
    compareChoices(playerChoice, computerChoice);
  }

  function compareChoices(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
      tie(playerChoice, computerChoice);
    } else if (
      (playerChoice == "Rock" && computerChoice == "Scissors") ||
      (playerChoice == "Paper" && computerChoice == "Rock") ||
      (playerChoice == "Scissors" && computerChoice == "Paper")
    ) {
      winRound(playerChoice, computerChoice);
    } else if (
      (playerChoice == "Rock" && computerChoice == "Paper") ||
      (playerChoice == "Paper" && computerChoice == "Scissors") ||
      (playerChoice == "Scissors" && computerChoice == "Rock")
    ) {
      loseRound(playerChoice, computerChoice);
    }
  }

  function tie(playerChoice, computerChoice) {
    alert(
      `Player chose ${playerChoice} Computer chose ${computerChoice}. It's a tie.`
    );
  }

  function winRound(playerChoice, computerChoice) {
    alert(
      `Player chose ${playerChoice} Computer chose ${computerChoice} You win this round.`
    );
    playerScore++;
  }

  function loseRound(playerChoice, computerChoice) {
    alert(
      `Player chose ${playerChoice} Computer chose ${computerChoice} You lose this round.`
    );
    computerScore++;
  }

  for (let i = 1; i <= 3; i++) {
    playRound();
  }

  if (playerScore > computerScore) {
    alert(
      `You got ${playerScore} points. Computer got ${computerScore}. You're a Winner`
    );
  } else if (playerScore < computerScore) {
    alert(
      `You got ${playerScore} points. Computer got ${computerScore}. You lose.`
    );
  } else if (playerScore == computerScore) {
    alert(
      `You got ${playerScore} points. Computer got ${computerScore}. It's a tie.
      `
    );
  }
}
