

// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var options = ["r", "p", "s"];

var gameStats = {
  ties: 0,
  userWins: 0,
  computerWins: 0,
  rounds: 0
}


var champion;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed
  var winner;
  var userGuess = event.key;

  //  loop
  // Only run the following code block if the user presses "r" or "p" or "s".
  // GUARD CLAUSE
  if ((userGuess !== "r") && (userGuess !== "p") && (userGuess !== "s")) {
    return
  }

  // Alerts the key the user pressed (userGuess).
   //  alert("user guess " + userGuess);

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = options[Math.floor(Math.random() * options.length)];

  // Alerts the Computer's guess.
   // alert( "comp guess " + computerGuess);


   if (userGuess === "p" && computerGuess == "r") {
    winner = "User";
  } else if (userGuess === "p" && computerGuess == "s") {
    winner = "Computer";
  } else if (userGuess === "r" && computerGuess == "p") {
    winner = "Computer";
  } else if (userGuess === "r" && computerGuess == "s") {
    winner = "User";
  } else if (userGuess === "s" && computerGuess == "p") {
    winner = "User";
  } else if (userGuess === "s" && computerGuess == "r") {
    winner = "Computer";
  } else  {
    winner = "Tie";
  }


  if (winner === "Tie") {
    gameStats.ties += 1;
    gameStats.rounds += 1;
  }
  else if (winner === "User") {
    gameStats.userWins += 1;
    gameStats.rounds += 1;
  }
  else  {
    gameStats.computerWins += 1;
    gameStats.rounds += 1;
  }


  document.getElementById("winner").innerHTML = "This round's winner: " + winner;
  document.getElementById("user").innerHTML = "User wins: " + gameStats.userWins;
  document.getElementById("computer").innerHTML = "Computer wins: " + gameStats.computerWins;
  document.getElementById("tie").innerHTML = "Ties: " + gameStats.ties;
  document.getElementById("rounds").innerHTML = "Rounds: " + gameStats.rounds;

  // console.log(winner);
  // console.log(gameStats);

  if(gameStats.userWins > 4 || gameStats.computerWins > 4 ){
    if(gameStats.userWins > 4)
      var champion = "User";

    else {
      var champion = "Computer";
    }


    gameStats = {
      ties: 0,
      userWins: 0,
      computerWins: 0,
      rounds: 0
    }

    document.getElementById("winner").innerHTML = "New champion: " + champion;
    document.getElementById("tie").innerHTML = "Press key to replay";
    document.getElementById("rounds").innerHTML = "";

  }




}


