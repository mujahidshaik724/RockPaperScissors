    let ucount = 0;
    let ccount = 0;
    let tcount = 0;
    let gameOver = false;

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

    function playGame(userChoice) {
      if (gameOver) return;

      const computerChoice = getComputerChoice();

      if (userChoice === computerChoice) {
        tcount++;
        console.log(
          `User choice ${userChoice} and computer choice ${computerChoice} are the same, so it's a TIE..!`
        );
      } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSOR") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSOR" && computerChoice === "PAPER")
      ) {
        ucount++;
        console.log(
          `Your choice is ${userChoice} and computer choice is ${computerChoice}, so You Win..!`
        );
      } else {
        ccount++;
        console.log(
          `Your choice is ${userChoice} and computer choice is ${computerChoice}, so Computer Wins..!`
        );
      }

      displayScores();

      if (ucount === 5 || ccount === 5) {
        gameOver = true;
        let winner = ucount === 5 ? 'You are the Winner!' : 'Computer is the Winner!';
        console.log('Game Over');
        document.getElementById('winner-message').textContent = winner;
        document.getElementById('reset-button').style.display = 'block';
      }
    }

    function displayScores() {
      document.getElementById("user-score").textContent = `Your Score: ${ucount}`;
      document.getElementById("computer-score").textContent = `Computer Score: ${ccount}`;
      document.getElementById("tie-score").textContent = `Tie: ${tcount}`;
    }

    function resetGame() {
      ucount = 0;
      ccount = 0;
      tcount = 0;
      gameOver = false;
      displayScores();
      document.getElementById('winner-message').textContent = '';
      document.getElementById('reset-button').style.display = 'none';
      console.log('Game Reset');
    }

    document.getElementById("rock").addEventListener("click", function () {
      playGame("ROCK");
    });

    document.getElementById("paper").addEventListener("click", function () {
      playGame("PAPER");
    });

    document.getElementById("scissor").addEventListener("click", function () {
      playGame("SCISSOR");
    });

    document.getElementById("reset-button").addEventListener("click", resetGame);