const decisionJugador = prompt("Elegí. piedra, papel o tijera")
console.log('Eleccion de jugador: ' + decisionJugador)
let resultado
let jugadorPuntos = 0
let maquinaPuntos = 0

function decisionMaquina() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        decisionMaquina = 'piedra'
        console.log('Eleccion de la máquina: ' + decisionMaquina)
        
    } else if (randomNumber === 2) {
        decisionMaquina = 'papel'
        console.log('Eleccion de la máquina: ' + decisionMaquina)
    } else if (randomNumber === 3) {
        decisionMaquina = 'tijera'
        console.log('Eleccion de la máquina: ' + decisionMaquina)
    }
}
decisionMaquina()

function obtenerResultado() {
    if (decisionJugador === decisionMaquina) {
        resultado = 'Empate!'
    }
    if (decisionMaquina === "piedra" && decisionJugador === "papel") {
        resultado = 'Ganaste!'
    }
    if (decisionMaquina === "piedra" && decisionJugador === "tijera") {
        resultado = 'Perdiste :('
    }
    if (decisionMaquina === "papel" && decisionJugador === "tijera") {
        resultado = 'Ganaste!'
    }
    if (decisionMaquina === "papel" && decisionJugador === "piedra") {
        resultado = 'Perdiste :('
    }
    if (decisionMaquina === "tijera" && decisionJugador === "piedra") {
        resultado = 'Ganaste!'
    }
    if (decisionMaquina === "tijera" && decisionJugador === "papel") {
        resultado = 'Perdiste :('
    }
    mostrarResultado = resultado
}

obtenerResultado()
console.log('resultado: ' + mostrarResultado)























// const resultDisplay = document.getElementById('result')
// const possibleChoices = document.querySelectorAll('button')

// let userChoice
// let computerChoice 
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//     userChoice = e.target.id
//     userChoiceDisplay.innerHTML = userChoice
//     generateComputerChoice()
//     getResult()
// }))







// function getResult () {
//     if (computerChoice === userChoice) {
//         document.getElementById('jugada_jugador').style = "animation: none;"
//         result = 'Empate!'
//     }
//     if (computerChoice === "rock" && userChoice === "paper") {
//         document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
//         result = 'Ganaste!'
//     }
//     if (computerChoice === "rock" && userChoice === "scissors") {
//         document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
//         result = 'Perdiste :('
//     }
//     if (computerChoice === "paper" && userChoice === "scissors") {
//         document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
//         result = 'Ganaste!'
//     }
//     if (computerChoice === "paper" && userChoice === "rock") {
//         document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
//         result = 'Perdiste :('
//     }
//     if (computerChoice === "scissors" && userChoice === "rock") {
//         document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
//         result = 'Ganaste!'
//     }
//     if (computerChoice === "scissors" && userChoice === "paper") {
//         document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
//         result = 'Perdiste :('
//     }
//     resultDisplay.innerHTML = result
// }