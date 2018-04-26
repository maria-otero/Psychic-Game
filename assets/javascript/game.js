
// computer options to chose
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// parameters
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;

// Function reset
 function reset() {
        userGuess = '';
        computerGuess = '';
        losses = 0;
        guessesLeft = 9;
    }


// Wins: (# of times the user has guessed the letter correctly)

document.onkeyup = function(event) {
    // Store userGuess
    var userGuess = event.keyCode;

    if ((userGuess >= 65) && (userGuess <= 90)) {
        userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
        console.log(userGuess);

        // computer sings: user what letter I'm thinking of?? lalala
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);

        // show userGuesses
        document.getElementById('gLetters').innerHTML = userGuess;

        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        if (userGuess === computerGuess) {
            // win 1
            wins++;
        } else if (guessesLeft === 0){
        // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
            reset();
        } else {
            losses++;
            guessesLeft--;
        }

        // HTML variable that display arguments
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        document.getElementById('gLetters').innerHTML = userGuess;
    }

};
