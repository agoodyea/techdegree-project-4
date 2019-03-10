/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        let chars = this.phrase.split('');
        const phraseUl = document.getElementById('phrase').children[0];

        chars.forEach(char => {
            if(char != ' ') {
                let li = document.createElement('li');
                li.setAttribute('class', `hide letter ${char}`);
                li.textContent = char;
                phraseUl.appendChild(li);
            }else {
                let li = document.createElement('li');
                li.setAttribute('class', `space`);
                li.textContent = char;
                phraseUl.appendChild(li);
            }
        })
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const phraseLis = document.getElementById('phrase').children[0].children;
        phraseLis.forEach(li => {
            if(li.className.includes(letter)) {
                li.className = 'show';
            }
        })
    }
}