const validateGuess = (guess) =>{
     const number = +guess

    function notNaNValidation() {
        return Number.isNaN(number)
    }

     if (notNaNValidation() || number < smallestNumber || number > biggestNumber){
        var invalidGuess = document.createElement('h3')
        invalidGuess.append('Valor invalido!')
        elementGuess.appendChild(invalidGuess)
        return
     }
     if(number === secretNumber){
        document.body.innerHTML = `
        <h1 class="tittle">Parabéns!!!!</h1>
        <h2>Você acertou, o número secreto era ${secretNumber}!</h2>
        <Button class='btn' variant="contained" onclick='window.location.reload()'>Jogar Novamente</Button>
        `
     }
     else if(number < secretNumber){
        elementGuess.innerHTML +=`<div class="tip"><p>O número secreto é maior </p><span class="material-icons"><p>arrow_circle_up</p></span></div>`
     }
     else if(number > secretNumber){
        elementGuess.innerHTML +=`<div class="tip"><p>O número secreto é menor </p><span class="material-icons"><p>arrow_circle_down</p></span></div>`
     }

}