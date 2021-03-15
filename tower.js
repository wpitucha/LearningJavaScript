const canvasTower = document.getElementById('towercanv')
const tctx = canvasTower.getContext('2d')

let tctxWidth = canvasTower.width = 1300
let tctxHeight = canvasTower.height = 750

let blockWidth = 150
let blockHeight = 150
let blockColor

let blockX = tctxWidth/2 - blockWidth/2
let blockY = tctxHeight/3 - blockHeight/2

let tmpSpeed
let blockXspeed = 3
let blockYspeed = 0

let towerWidth = 150
let towerHeight = 150
let towerYspeed = 0

let towerX = tctxWidth/2 - towerWidth/2
let towerY = tctxHeight - towerHeight

const blockColors = ['white', 'red', 'green', 'blue', 'yellow', 'purple', 'brown', 'pink']

function randomBlockColor() {
    let j = Math.floor(Math.random()*blockColors.length)
    blockColor = blockColors[j]
}
randomBlockColor()

function paintTctx() {
    tctx.fillStyle = 'black'
    tctx.fillRect(0, 0, tctxWidth, tctxHeight)
}

function block() {
    tctx.fillStyle = blockColor
    tctx.fillRect(blockX, blockY, blockWidth, blockHeight)

    blockX += blockXspeed
    blockY += blockYspeed

    if (blockX + blockWidth > tctxWidth || blockX < 0)
        blockXspeed = -blockXspeed
}

function tower() {
    tctx.fillStyle = 'green'
    tctx.fillRect(towerX, towerY, towerWidth, towerHeight)
}

function towerReset() {
    
    blockYspeed = 0
    towerYspeed = 0
    console.log('towerreset')

    towerY = blockY
    towerX = blockX

    blockX = tctxWidth/2 - blockWidth/2
    blockY = tctxHeight/3 - blockHeight/2

    blockXspeed = tmpSpeed
    tmpSpeed = 0
}

function towerDown() {
    tmpSpeed = blockXspeed
    blockXspeed = 0
    blockYspeed = 5


     timerDown = setInterval(function() {
        if (blockY+blockHeight >= tctxHeight - towerHeight) {
            //console.log('Blok jest przy wiezy')
            if (blockX > towerX-towerWidth && blockX < towerX + towerWidth) {
                //console.log('blok jest w przedziale')
                blockYspeed = 0

                setTimeout(() => { 
                    setInterval(function towerDownPartTwo() { 
                        blockYspeed = 5
                        towerYspeed = 5
                        towerY += towerYspeed
                        console.log('blockYspeed = 5')

                        if (blockY == tctxHeight - towerHeight) {
                            blockYspeed = 0
                            console.log('event')
                            towerReset()
                            clearInterval(timerDown)
                            clearInterval(timerDown)
                        }
                    }, 1000/60)
                }, 1000)
            }
            else  {
                //console.log('bloku nie ma w przedziale')

                setInterval(function() { 
                    tctx.font = "130px Arial"
                    tctx.fillStyle = "red"
                    tctx.textAlign = "center"
                    tctx.fillText("LOSE", tctxWidth/2, tctxHeight/2)
                }, 1000/60)
                return;
            }
        }
    }, 1000/60)
}

function towerFunc() {
    paintTctx()
    block()
    tower()
}

setInterval(towerFunc, 1000/60)