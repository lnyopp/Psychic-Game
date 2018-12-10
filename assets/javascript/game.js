

    var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    //Creating variables to hold the number of wins, losses, guess, guesses left.

    var wins = 0;
    var losses = 0;
    var guess = "";
    var guessLeft = 9;
    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerChoice= letters[Math.floor(Math.random() * letters.length)];
    

      // This logic determines the outcome of the game( wether or not user has guessed properly).
        // If statement so that user cannot guess the same letter twice
        if(guess.includes(userGuess)){
            alert("Choose another letter, You may only guess the same letter once.")
            guess.pop();
        };
       
       if(letters.includes(userGuess)){

       if (userGuess === computerChoice) {
          wins++; 
          //wins  = wins +1 
          guessLeft = 9;
          guess = "";

        }
         
        else if (userGuess !== computerChoice) {              
         
         guessLeft--; 
         //guessLeft = guessLeft -1   
         guess += userGuess + "," ;

         // guess += userguess is the same as guess = guess + userguess
        
        } 
        
        if (guessLeft < 0 ){
            guess = "";
            guessLeft = 9;
            losses ++;
            
        }
    }

    
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
            "<h1> Psychic Game </h1>"+


         
          "<p> wins: " + wins + "</p>" +
          "<p> losses: " + losses + "</p>" +
          "<p> Guesses Remaining: " + guessLeft + "</p>"+
          "<p> Previous Guesses:  " + guess + "</p>";

          // a string is how you keep track of html in javascript. 
       

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

    };

