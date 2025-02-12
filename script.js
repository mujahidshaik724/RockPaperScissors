let ucount = 0;
let ccount = 0;
let tcount = 0;
let getUserChoice;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "ROCK";
  } else if (num === 1) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

function playGround() {
  getUserChoice = prompt("Enter Rock, Paper, Scissor: ");
  getUserChoice = getUserChoice.toUpperCase();

  const computerSelection = getComputerChoice(); // Move inside the function

  if (getUserChoice === computerSelection) {
    tcount++;
    console.log(
      `User choice ${getUserChoice} and computer choice ${computerSelection} are the same, so it's a TIE..!`
    );
  } else if (
    (getUserChoice === "ROCK" && computerSelection === "SCISSOR") ||
    (getUserChoice === "PAPER" && computerSelection === "ROCK") ||
    (getUserChoice === "SCISSOR" && computerSelection === "PAPER")
  ) {
    ucount++;
    console.log(
      `Your choice is ${getUserChoice} and computer choice is ${computerSelection}, so You Win..!`
    );
  } else {
    ccount++;
    console.log(
      `Your choice is ${getUserChoice} and computer choice is ${computerSelection}, so Computer Wins..!`
    );
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playGround();
  }
  console.log(`Your Score ${ucount}`);
  console.log(`Computer Score ${ccount}`);
  console.log(`Tie  ${tcount}`);
}

playGame();
