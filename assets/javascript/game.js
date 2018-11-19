//letters that the computer is going to choose from 
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var userChoice, computerChoice;
// set var to zero 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetter = "";

// 1. computer choose a random letter 
computerChoice = computerChoices[Math.floor(Math.random() * 26)];
//console.log(computerChoice);
// 2. accept the user input and store in the variable 
document.onkeyup = function (event) {
    userChoice = event.key;
    //  3. compare userChoice VS computerChoice using if statement 
    if (userChoice == computerChoice) {
        wins++;
        $("#wins").text(wins);
        //generate a new letter and assign to computer choice
        computerChoice = computerChoices[Math.floor(Math.random() * 26)];
        // update guessesleft
        guessesLeft = 9;
        //displaying the new value of guessesleft to the DOM
        $("#guessesLeft").text(guessesLeft);
        //updating your guesses so far with an empty value
        guessedLetter = "";
        //displaying the new value of your guesses so far 
        $("#guessesSoFar").text(guessedLetter);
    }
    else { //  4. reduce guessesLeft by 1
        if (guessesLeft > 1) {
            guessesLeft--;
            $("#guessesLeft").text(guessesLeft);
            //updating your guesses so far with user value
            guessedLetter = guessedLetter + userChoice + ", ";
            //displaying the new value of your guesses so far 
            $("#guessesSoFar").text(guessedLetter);
        } else {
            // update guessesleft
            guessesLeft = 9;
            //displaying the new value of guessesleft to the DOM
            $("#guessesLeft").text(guessesLeft);
            //increase the value of Losses
            losses++;
            //displaying the new losses
            $("#losses").text(losses);
            computerChoice = computerChoices[Math.floor(Math.random() * 26)];
            console.log(computerChoice);
            //updating your guesses so far with an empty value
            guessedLetter = "";
            //displaying the new value of your guesses so far 
            $("#guessesSoFar").text(guessedLetter);

        }
    }

}


