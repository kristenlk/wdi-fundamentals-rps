/* This function asks the user to enter either rock, paper, or scissors. */
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

/* This function randomly chooses the computer's move and returns it. */
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* This function returns either move (pretty much only if I manually enter a move) or asks for the user's input through the getInput() function. */
function getPlayerMove(move) {
    return move || getInput();
}

/* This function returns either move (pretty much only if I manually enter a move) or gets a random move from the randomPlay() function. */
function getComputerMove(move) {
    return move || randomPlay();
}

/* This function takes in playerMove and computerMove, declares a variable called winner, and assigns it either tie, computer, or player depending on what the player's and computer's moves are.
This function is called in the playToFive() function, and playerMove and computerMove pull the results of the getPlayerMove() and getComputerMove() functions. */
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == "rock" && computerMove == "rock") {
        winner = "tie";
    } else if (playerMove == "rock" && computerMove == "paper") {
        winner = "computer";
    } else if (playerMove == "rock" && computerMove == "scissors") {
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "rock") {
        winner = "player";
    } else if (playerMove == "paper" && computerMove == "paper") {
        winner = "tie";
    } else if (playerMove == "paper" && computerMove == "scissors") {
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "rock") {
        winner = "computer";
    } else if (playerMove == "scissors" && computerMove == "paper") {
        winner = "player";
    } else if (playerMove == "scissors" && computerMove == "scissors") {
        winner = "tie";
    } else {
        console.log("Try again! Pick either rock, paper, or scissors.");
    }
    return winner;
}

/* This function sets two variables, playerWins and computerWins, to 0, and increments them by 1 in a while loop (which runs until either playerWins or computerWins is 5.
playerMove and computerMove are pulled from the getPlayerMove() and getComputerMove() functions, respectively.
A variable, winner, is pulled from the getWinner function, which determines the winner based on the results of the getPlayerMove() and getComputerMove() functions. 
A message declaring the winner is printed, depending on who won. */
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        console.log("The score is currently player: " + playerWins + ", computer: " + computerWins)
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
        if (winner === "player") {
            playerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("The winner of this round is " + winner + ".");
         } else if (winner === "computer") {
            computerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("The winner of this round is " + winner + ".");
        } else if (winner === "tie") {
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("This round was a tie. Try again!");
        }
    }

    if (playerWins === 5) {
        console.log("You won!"); 
    } else if (computerWins === 5) {
        console.log("Computer won.");
    }   
    return [playerWins, computerWins];
    
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < x && computerWins < x) {
        console.log("The score is currently player: " + playerWins + ", computer: " + computerWins)
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
        if (winner === "player") {
            playerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("The winner of this round is " + winner + ".");
         } else if (winner === "computer") {
            computerWins += 1;
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("The winner of this round is " + winner + ".");
        } else if (winner === "tie") {
            console.log("You chose " + playerMove + " while the computer chose " + computerMove + ".");
            console.log("This round was a tie. Try again!");
        }
    }

    if (playerWins === x) {
        console.log("You won!"); 
    } else if (computerWins === x) {
        console.log("Computer won.");
    }   
    return [playerWins, computerWins];
}
playTo(2);