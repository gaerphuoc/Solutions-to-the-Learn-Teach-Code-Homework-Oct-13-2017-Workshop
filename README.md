# Solutions-to-the-Learn-Teach-Code-Homework-Oct-13-2017-Workshop
https://battleship106.glitch.me/
<br>
The problem lies in the script.js file. Notice that you can't win when you put 2 and 3 in the input fields. In order for the whole thing to work, the variables, userRowGuess and userColGuess, must be inside the function compareAndDisplayOutcome for the "if" statements to compare. Otherwise, it won't know have anything to compare to the correctRow and correctCol
