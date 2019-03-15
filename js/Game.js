/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
     startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();  
        this.activePhrase.addPhraseToDisplay();
     }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase() {
        let randIndex = Math.floor(Math.random() * this.phrases.length );
        return this.phrases[randIndex];
     }

     handleInteraction(e) {
         if(e.target.className === 'key') {
            let letter = e.target.textContent.toLowerCase();

            if(this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);
                e.target.disable = true;
                e.target.className = 'chosen'
            }else {
                e.target.disable = true;
                e.target.className = 'wrong';
                this.removeLife();
            }

            if(this.checkForWin()) {
                this.gameOver(true)
            }
         }
     }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
     removeLife() {
        const heartLis = document.getElementsByClassName('tries');
        heartLis[this.missed].firstElementChild.setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver(false);
        }
     }

     /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
     checkForWin() {
        const phraseLis = document.getElementById('phrase').children[0].children;
        let isWinner = true;
        for(let i = 0; i < phraseLis.length; i++) {
            if(phraseLis[i].className === 'show' || phraseLis[i].className === 'space') {
                continue;
            }else {
                isWinner = false;
                break;
            }
        }
        return isWinner;
     }  

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
     gameOver(gameWon) {
        const overLay = document.getElementById('overlay');
        overLay.style.display = '';

        if(gameWon) {
            overLay.className = 'win';
            overLay.children[1].textContent = 'Nice, you win!'
        }else {
            overLay.className = 'lose';
            overLay.children[1].textContent = 'Better luck next time'
        }

        const phraseUl = document.getElementById('phrase').firstElementChild;
        while(phraseUl.firstElementChild) {
            phraseUl.removeChild(phraseUl.firstElementChild);
        }
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases() {
        const phrasePool = []
        const phrase1 = new Phrase('Winter is coming i think');
        phrasePool.push(phrase1);
        const phrase2 = new Phrase('I feel like chicken tonight');
        phrasePool.push(phrase2);
        const phrase3 = new Phrase('Hey those are my nuts');
        phrasePool.push(phrase3);
        const phrase4 = new Phrase('we might possible need a bigger boat maybe');
        phrasePool.push(phrase4);
        const phrase5 = new Phrase('luke i might be your father but im not sure');
        phrasePool.push(phrase5);

         return phrasePool;
     }
 }