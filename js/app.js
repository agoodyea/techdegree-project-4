/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();
const phrase = game.getRandomPhrase();
phrase.addPhraseToDisplay();

document.getElementById('btn_reset').addEventListener('click', function() {
   let game = new Game();
   game.startGame();
})