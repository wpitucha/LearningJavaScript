const paper = "🧾"
const rock = "🗿"
const scissors = "✂️"

const rockpaperArray = ['🧾', '🗿', '✂️']

let playerPoints = 0
let aiPoints = 0

let rockPlayer = document.getElementById('player')
let rockAi = document.getElementById('ai')

const paperFunc = () => { document.getElementById('player').innerHTML = paper }
const rockFunc = () => { document.getElementById('player').innerHTML = rock }
const scissorsFunc = () => { document.getElementById('player').innerHTML = scissors }

function rockpaper() {
    if (rockPlayer.innerHTML === '') {
        document.getElementById('info').innerHTML = 'Select item'
        setTimeout(function() {
            document.getElementById('info').innerHTML = ''
        }, 3000)
    }
    else {
        let number = Math.floor(Math.random()*3)
        //console.log(number)
        document.getElementById('ai').innerHTML = rockpaperArray[number]
        
        if (rockPlayer.innerHTML == rock) {
        if (rockAi.innerHTML == paper)
            aiPoints++
        if (rockAi.innerHTML == scissors)  
            playerPoints++  
        }

        if (rockPlayer.innerHTML == paper) {
            if (rockAi.innerHTML == scissors)
                aiPoints++
            if (rockAi.innerHTML == rock)  
                playerPoints++  
        }

        if (rockPlayer.innerHTML == scissors) {
            if (rockAi.innerHTML == rock)
                aiPoints++
            if (rockAi.innerHTML == paper)  
                playerPoints++  
        }

        document.getElementById('counter').innerHTML = playerPoints + ' - ' + aiPoints
    }
}
