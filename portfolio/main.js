const dynamicContent = document.getElementById("dynamic-text");

const phrases = ["Web Developer....", "Software Engineer...."];

let letterIndex = 0;
let phraseIndex = 0;

const typingSpeed = 125;
const erasingSpeed = 100;
function printLetters(phrase){
    if(letterIndex == phrase.length){
        clearLetters();
    }
    else if(letterIndex < phrase.length){
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(function(){
            printLetters(phrase)
        }, typingSpeed);
    }
}

function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
        let updatedPhrase ="";
        for(let index = 0; index < letterIndex; index++){
            updatedPhrase += phrases[phraseIndex].charAt(index)
        }
        console.log(updatedPhrase)
    dynamicContent.textContent = updatedPhrase;
    letterIndex -=1;
    setTimeout(clearLetters,erasingSpeed);
    }
}
printLetters(phrases[phraseIndex])