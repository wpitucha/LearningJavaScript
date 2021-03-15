const paintingCanvas = document.getElementById('paint')
const pctx = paintingCanvas.getContext('2d')

paintingCanvas.width = 1300
paintingCanvas.height = 150

canvh = paintingCanvas.height
canvw = paintingCanvas.width

let rectengleWidth = 30
let rectengleHeigth = 75

let rectenglePositionX = canvw/2 - rectengleWidth/2
let rectenglePositionY = canvh/2 - rectengleHeigth/2

let rectengleSpeedX = 4

let conditionSize = 75
let conditionPostion = Math.floor(Math.random() * canvw - conditionSize)

function paintRectengle() {
    pctx.fillStyle = 'black'
    pctx.fillRect(0, 0, canvw, canvh)
}

function rectengle() {
    pctx.fillStyle = 'green'
    pctx.fillRect(rectenglePositionX, rectenglePositionY, rectengleWidth, rectengleHeigth)

    rectenglePositionX += rectengleSpeedX

    if (rectenglePositionX > canvw - rectengleWidth)
        rectengleSpeedX = -rectengleSpeedX
    if (rectenglePositionX < 0)
        rectengleSpeedX = -rectengleSpeedX
}

function randomConditionPostion() {
    conditionPostion = Math.floor(Math.random() * canvw)
}
randomConditionPostion()

function condition() {
    pctx.fillStyle = 'blue'
    pctx.fillRect(conditionPostion, rectenglePositionY, conditionSize, conditionSize)
    //console.log('condition')
}

function conditionClick() {

    if(rectenglePositionX > conditionPostion && rectenglePositionX < conditionPostion+conditionSize) {
        if (rectengleSpeedX > 0) 
            rectengleSpeedX += 4
        else {
            rectengleSpeedX = -rectengleSpeedX
            rectengleSpeedX += 4
        }

        rectenglePositionX = canvw/2 - rectengleWidth/2
        randomConditionPostion()
    }
    else {
        rectengleSpeedX = 4
        rectenglePositionX = canvw/2 - rectengleWidth/2
        randomConditionPostion()
    }
}

function rectengleGame() {
    paintRectengle()
    condition()
    rectengle()
}

setInterval(rectengleGame, 1000/60)