const SnakeCav = document.getElementById('SnakeCav');
const sctx = SnakeCav.getContext('2d');

const sctxWidth = SnakeCav.width = 400
const sctxHeight = SnakeCav.height = 400
snakeSpeed = 7

let tileCount = 20
let tileSize = sctxWidth - tileCount - 2
let headX = 10
let headY = 10

let xVelocity = 0
let yVelocity = 0

const program = function() {
    clearScreen()
    drawSnake()
    changeSnakePosition()
    setTimeout(program, 1000/snakeSpeed)
}

function clearScreen() {
    sctx.fillStyle = 'black'
    sctx.fillRect(0, 0, sctxWidth, sctxHeight)
}

function drawSnake() {
    sctx.fillStyle = 'red'
    sctx.fillRect(headX * tileCount, headY*tileCount, tileCount, tileCount)
}

function changeSnakePosition() {
    headX = headX + xVelocity
    headY = headY + yVelocity
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
        yVelocity = 0
        xVelocity = -1
    } //left

    if(event.keyCode == 68) {
        yVelocity = 0
        xVelocity = 1
    } //right
}

program()