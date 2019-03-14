/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// let game = new Game();
// const phrase = game.getRandomPhrase();
// phrase.addPhraseToDisplay();

document.getElementById('btn__reset').addEventListener('click', function() {
    // if(game) {
    //     game = null;
    // }
   const game = new Game();
   game.startGame();

    document.getElementById('qwerty').addEventListener('click', function(e){
        game.handleInteraction(e);
    });
})

// const game = new Game();
// game.startGame();



// TO DO LIST
// - look if I can replace for loops with forEach() using .childNodes
// - create inner function for pushing/creating phrases.