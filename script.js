function getPlayerChoice() {
  return prompt("Please type in Rock, Paper or Scissors");
}

const weaponChoice = ["Rock", "Scissors", "Paper"];
function getCompChoice() {
  return weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
}

let playerScore = 0;
let computerScore = 0;

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
