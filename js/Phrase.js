/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let chars = this.phrase.split('');
        const phraseDiv = document.getElementById('phrase');

        chars.forEach(char => {
            if(char != ' ') {
                let li = document.createElement('li');
                li.setAttribute('class', `hide letter ${char}`);
                li.textContent = char;
                phraseDiv.appendChild(li);
            }else {
                let li = document.createElement('li');
                li.setAttribute('class', `space`);
                li.textContent = char;
                phraseDiv.appendChild(li);
            }
        })
        

    }

    checkLetter() {

    }

    showMatchedLetter() {
        
    }
}