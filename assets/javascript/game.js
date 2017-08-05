var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess = [""]; 



document.onkeyup = function(event) {
var userGuess = event.key;
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);
      console.log(computerGuess);

for (var i = 0; i < computerGuess.length; i++); {

      if (userGuess !== computerGuess) {
            guessLeft--;

      if (userGuess == computerGuess) {
            wins++;
            
      	
      } if (guessLeft <= 0) {
      	losses++;
      
      }
};

       document.getElementById('wins').innerHTML = "Wins: " + wins;
       document.getElementById('losses').innerHTML = "losses: " + losses;
       document.getElementById('guessLeft').innerHTML = "Guesses left: " + guessLeft;
       document.getElementById("userGuess").innerHTML = "Your Guesses so far: " + userGuess;
 };
};