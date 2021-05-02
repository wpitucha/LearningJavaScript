const SnakeCav = document.getElementById('SnakeCav');
const sctx = SnakeCav.getContext('2d');

class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

const sctxWidth = SnakeCav.width = 400
const sctxHeight = SnakeCav.height = 400
snakeSpeed = 12

let tileCount = 20
let tileSize = sctxWidth / tileCount - 2
let headX = 10
let headY = 10
const snakeParts = []
let tailLength = 2

let appleX = 5
let appleY = 5

let xVelocity = 0
let yVelocity = 0

const program = function() {
    changeSnakePosition()
    let snakeResult = isGameOver()
    if (snakeResult) return;

    clearScreen()
    checkAppleCollision()
    drawSnake()
    drawApple()
    setTimeout(program, 1000/snakeSpeed)
}

function isGameOver() {
    let gameOver = false;

    if (yVelocity === 0 && xVelocity === 0 ) return false

    if (headX < 0 || headX == tileCount || headY < 0 || headY == tileCount)  {
        gameOver = true
    }

    for(let i=0; i<snakeParts.length; i++) {
        let part = snakeParts[i]
        if(part.x === headX && part.y === headY) {
            gameOver = true
            break
        }
    }

    if (gameOver) {
        sctx.fillStyle = 'white'
        sctx.font = '50px Arial'
        sctx.fillText("Game Over!", sctxWidth/6, sctxHeight/2)
    }

    return gameOver
}

function clearScreen() {
    sctx.fillStyle = 'black'
    sctx.fillRect(0, 0, sctxWidth, sctxHeight)
}

function drawSnake() {
    sctx.fillStyle = 'green'
    for(let i=0; i<snakeParts.length; i++) {
        let part = snakeParts[i]
        sctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
    }

    snakeParts.push(new SnakePart(headX, headY))
    while (snakeParts.length > tailLength) {
        snakeParts.shift()
    }

    sctx.fillStyle = 'red'
    sctx.fillRect(headX * tileCount, headY*tileCount, tileSize, tileSize)
}

function changeSnakePosition() {
    headX = headX + xVelocity
    headY = headY + yVelocity
}

function drawApple() {
    sctx.fillStlye = 'green'
    sctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
}

function checkAppleCollision() {
    if (appleX === headX && appleY == headY) {
        appleX = Math.floor(Math.random()*tileCount)
        appleY = Math.floor(Math.random()*tileCount)
        tailLength++
    }
}

document.body.addEventListener('keydown', keyDown)

function keyDown(event) {
    if(event.keyCode == 87) {
        if(yVelocity == 1) return
        yVelocity = -1
        xVelocity = 0
    } //up

    if(event.keyCode == 83) {
        if(yVelocity == -1) return
        yVelocity = 1
        xVelocity = 0
    } //down

    if(event.keyCode == 65) {
        if(xVelocity == 1) return
        yVelocity = 0
        xVelocity = -1
    } //left

    if(event.keyCode == 68) {
        if(xVelocity == -1) return
        yVelocity = 0
        xVelocity = 1
    } //right
}

program()