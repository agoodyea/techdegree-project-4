/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 document.getElementById('btn_reset').addEventListener('click', function() {
    let game = new Game();
    game.startGame();
 })