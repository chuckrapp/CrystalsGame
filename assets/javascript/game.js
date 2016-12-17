var userScore = 0;
var targetScore = 0;
var winCounter = 0;
var lossCounter = 0;
var totalClicks = 0;
var crystalRuby = 0;
var crystalDiamond = 0;
var crystalCitrine = 0;
var crystalEmerald = 0;
var statusMessage = "";


$(document).ready(function() {
    //updates the target score output to display at load
    $("#targetScoreOutput").html(targetScore);

    //returns a random number between x and y variables
    function randomNumber(x, y) {
        return Math.floor(Math.random() * ((y - x) + 1) + x);
    };

    //generates the random numbers, resets the score, and calls to updateTotal function
    function newGame() {
        targetScore = randomNumber(19, 120);
        crystalRuby = randomNumber(1, 12);
        crystalDiamond = randomNumber(1, 12);
        crystalCitrine = randomNumber(1, 12);
        crystalEmerald = randomNumber(1, 12);
        totalClicks = 0;
        userScore = 0;
        updateTotal();
        statusMessage = "";
    };

    //pushes out the variables to the HTML
    function updateTotal() {
        $("#targetScoreOutput").html(targetScore);
        $("#winsCounterOutput").html(winCounter);
        $("#lossCounterOutput").html(lossCounter);
        $("#userScoreOutput").html(userScore);
        $("#statusOutput").html(statusMessage);
        $("#totalClicksOutput").html(totalClicks);
    }

    //declares
    function winGame() {
        console.log("You Win!");
        winCounter++;
        updateTotal();
        newGame();
    }

    function loseGame() {
        console.log("You Loose!");
        lossCounter++;
        updateTotal();
        newGame();
    }

    function checkAnswer() {
        if (userScore === targetScore) {
            statusMessage = "Congratulations! You solved the puzzle!! Let's play again!";
            winGame();
        } else if (userScore > targetScore) {
            statusMessage = "Aww, You went over! Try again!";
            loseGame();
        }
    }

    $('#rubyOutput, #diamondOutput, #citrineOutput, #emeraldOutput').click(function() {
        totalClicks++;
        if (this.id == 'rubyOutput') {
            userScore += crystalRuby;
        } else if (this.id == 'diamondOutput') {
            userScore += crystalDiamond;
        } else if (this.id == 'citrineOutput') {
            userScore += crystalCitrine;
        } else if (this.id == 'emeraldOutput') {
            userScore += crystalEmerald;
        }
        updateTotal();
        checkAnswer();
    });

    newGame();
});
