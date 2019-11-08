(() => {
    
    const penduGame = () => {
        let wordToFind               = "Bonjour";                 // Could be changed later and requested from an API
            wordToFind               = wordToFind.toUpperCase();  // Doing this the case hasn't any impact on the game.
            arrLettersFromWordToFind = wordToFind.split("");
        let arrFoundLetters          = [];
        // Fill the array of found letter
        // If it's not a letter, the special char is pushed if it is, a space is push
        arrLettersFromWordToFind.forEach(element => /[a-z]/i.test(element) ? arrFoundLetters.push("_") : arrFoundLetters.push(element));
        // Set up the missing letters from the word
        let target = document.getElementById("target");
        target.innerHTML = arrFoundLetters.join(' ');
        // Set stats variables for the game
        let arrLetterAlreadyTried = [];
        let numberOfTry    = 0;
        let numberOfBadTry = 0;
        
        // set stat needed for the img
        let arrHang = [
            "assets/img/1.jpg",
            "assets/img/2.jpg",
            "assets/img/3.jpg",
            "assets/img/4.jpg",
            "assets/img/5.jpg",
            "assets/img/6.jpg",
            "assets/img/7.jpg",
            "assets/img/8.jpg",
            "assets/img/9.jpg",
            "assets/img/10.jpg",
            "assets/img/11.jpg"
        ]

        // change the hangedguy img src
        const hangedGuy = document.getElementById("hangman");
        const hang = (step) => {
            hangedGuy.src = arrHang[step]
        }

        const guessLetter = () => {
            // get a letter from user
            let letter = prompt("donnez une lettre");
            // Doing this the case hasn't any impact on the game.
            letter = letter.toUpperCase();
            // check if there is only one char and that it is a letter
            if ((letter.length > 1) || (!/[a-z]/i.test(letter))){
                alert("Vous ne pouvez donner qu'une lettre !");
                guessLetter();
                // Check if the letter has already been done
            } else if (arrLetterAlreadyTried.includes(letter)){
                alert(`vous avez déjà essayé la lettre ${letter}`);
                guessLetter();
            } else {
                numberOfTry++;
                arrLetterAlreadyTried.push(letter);
                // check if the letter is in the word to find
                if (arrLettersFromWordToFind.includes(letter)){
                    alert("Bravo, vous avez trouvé une lettre !")
                    //add the find letter to the place they are
                    for ( let i=0; i < arrLettersFromWordToFind.length; i++){
                        if (arrLettersFromWordToFind[i] == letter){
                            arrFoundLetters[i] = letter;
                        }
                        target.innerHTML = arrFoundLetters.join(' ');
                    }
                // if the the letter isn't in the word, get the stat and display a message
                } else {
                    numberOfBadTry++;
                    hang(numberOfBadTry);
                    alert(`Le mot ne contient pas la lettre ${letter}`);
                }
                // Check if the word has been find
                if(wordToFind == arrFoundLetters.join('')){
                    alert(`Bravo, vous avez gagné!\nNombre d'essai: ${numberOfTry}\nNombre d'erreur: ${numberOfBadTry}`);
                } else if(numberOfBadTry === 11){
                    alert("Vous avez perdu ! :( ")
                } else{
                    guessLetter();
                }
            }
        }

        // Launch the cycle
        guessLetter();
    }



    // Start the game
    document.getElementById("run").addEventListener("click", penduGame);

})();