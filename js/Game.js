/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     startGame() {

     }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase() {
        let randIndex = Math.floor(Math.random() * this.phrases.length );
        return this.phrases[randIndex];
     }

     handleInteraction() {

     }

     removeLife() {

     }

     checkForWin() {

     }

     gameOver() {
         
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases() {
         const phrases = [];
         for(let i = 1; i <= 5; i++) {
             const phrase = new Phrase(`The Phrase Brah!${i}`);
             phrases.push(phrase);
         }
         return phrases;
     }
 }