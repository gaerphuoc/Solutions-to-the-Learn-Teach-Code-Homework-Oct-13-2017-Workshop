// Choose the correct answer. TODO: randomize this later!!!
var correctRow = 2;
var correctCol = 3;

// Convert our HTML elements into JavaScript objects
var resultElement = document.getElementById("result");

var buttonElement = document.getElementById("fire");


var rowElement = document.getElementById("row-input");
var colElement = document.getElementById("col-input");




buttonElement.addEventListener("click", compareAndDisplayOutcome);


function compareAndDisplayOutcome () {
          var userRowGuess = document.getElementById("row-input").value;
          var userColGuess = document.getElementById("col-input").value;
          // If user's guess for row AND col match correct row AND col:
          if (  correctRow == userRowGuess  &&  correctCol == userColGuess)  {
              // Then display winning message
              resultElement.textContent = "hit! you win!";
          } else {
            // Otherwise, display losing message
            resultElement.textContent = "miss! try again";
          }       
}


