function getPlayerChoice() {
  return prompt("Please type in Rock, Paper or Scissors");
}

const weaponChoice = ["Rock", "Scissors", "Paper"];

function getCompChoice() {
  return weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
}
