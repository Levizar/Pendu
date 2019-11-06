(() => {
    const penduGame = () => {
        let wordToFind               = "Bonjour";                 // Could be changed later
            wordToFind               = wordToFind.toUpperCase();  // Doing this the case hasn't any impact on the game.
            arrLettersFromWordToFind = wordToFind.split("");
        let arrFoundLetters          = [];
        arrLettersFromWordToFind.forEach(element => arrFoundLetters.push(" "));
        let arrLetterAlreadyTried = [];
        let numberOfTry    = 0;
        let numberOfBadTry = 0;

        console.log('Salut');
        const guessLetter = () => {
            console.log('from guessLetter');
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
                    alert("vous avez trouvé une lettre !")
                    //add the find letter to the place they are
                    for ( let i=0; i < arrLettersFromWordToFind.length; i++){
                        if (arrLettersFromWordToFind[i] == letter){
                            arrFoundLetters[i] = arrLettersFromWordToFind[i];
                        } 
                    }
                } else {
                    numberOfBadTry++;
                    alert(`Le mot ne contient pas la lettre ${letter}`);
                }
        
                if(arrLettersFromWordToFind.join('') == arrFoundLetters.join('')){
                    alert(`Bravo, vous avez gagné!\nNombre d'essai: ${numberOfTry}\nNombre d'erreur: ${numberOfBadTry}`);
                } else{
                    guessLetter();
                }
            }
        }
        guessLetter();
    }
    document.getElementById("run").addEventListener("click", penduGame);

})();