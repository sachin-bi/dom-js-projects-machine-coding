function guessNum(min = 1, max = 100) {
    return Math.ceil(Math.random() * max)
}


const secretNum = guessNum()
console.log(secretNum);
let prevGuess = [];
let guessRemains = 10;


let form = document.querySelector('.form')
form.addEventListener("submit", (event) => {
    event.preventDefault();


    let guess = document.querySelector('#guessField').value
    console.log(guess);

    if (guess == secretNum) {
        document.querySelector('#guessField').value = "You WON.!"

        document.querySelector('#submitBtn').type = "hidden"
        document.querySelector('#guessField').readOnly = true
        return

    }
    prevGuess.push(guess)


    document.querySelector('.guesses').textContent = prevGuess
    document.querySelector('.lastResult').textContent = --guessRemains


    document.querySelector('#guessField').value = ""
    console.log(prevGuess);
    if (guessRemains === 0) {
        document.querySelector('#guessField').value = "You LOSE.!"
        document.querySelector('#submitBtn').type = "hidden"
        document.querySelector('#guessField').readOnly = true
    }
})

