const elementGuess = document.querySelector('#guess')
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

const showGuess = (guess) => {
    elementGuess.innerHTML = `
    <div><h2>Você disse:</h2></div>
        <span class="box">${guess}</span>`
}
 
const OnSpeak = (e) => {
    var speakNumber =  e.results[0][0].transcript
    showGuess(speakNumber)
    validateGuess(speakNumber)
}

recognition.addEventListener('result', OnSpeak)

recognition.addEventListener('end', () => recognition.start())