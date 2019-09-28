// create promt with text
var userChoice = prompt('Write "rock", "paper" or "scissors"');
var refreshButton = document.getElementById('refresh')
refreshButton.addEventListener('click', refreshPage)
function refreshPage() {
    document.location.reload(true);
}

// failure handler
if(! userChoice ) {
    alert('You cannot quit now!')
    // make sure to return client to prompt automatically
    document.location.reload(true)
}
else if ( userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
        document.write("<br>" + "You've chosen = " + " " + userChoice + "<br>")
    }

    else {
        alert('you must type in either "rock", "paper" or "scissors"')
        document.location.reload(true);
    }
// creating computer choice
var computerChoice = Math.random()
if (computerChoice < 0.34) {
    computerChoice = 'paper'
}
else if (computerChoice < 0.67) {
    computerChoice = 'scissors'
}
else {
    computerChoice = 'rock'
}

// write out computer choice
document.write("The computer has chosen = " + " " + computerChoice + " ")

// compare function

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "It's a tie!";

    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

// type out the result
var result = compare(userChoice,computerChoice)

document.write( "<br><br>" + result)
