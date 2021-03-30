const bounceballcanvas = document.getElementById('bouncecanv')
const bctx = bounceballcanvas.getContext('2d')

const bctxWidth = 1300
const bctxHeight = 800

bounceballcanvas.width = bctxWidth
bounceballcanvas.height = bctxHeight

let pointsArray = []
for (let i=0; i<116; i++) {
    pointsArray.push(true)
}

const pointSize = 20
let pointPositionX = 10
let pointPositionY = 10
let pointColor

const bounceballPlayerWidth = 200
const bounceballPlayerHeight = 50
let bounceballPlayerX = bctxWidth/2
const bounceballPlayerY = bctxHeight-bounceballPlayerHeight

const bounceballSize = 20
let bounceBallX = bctxWidth/2 - bounceballSize/2
let bounceBallY = bctxHeight/2 - bounceballSize/2

let bounceBallSpeedX = 7
let bounceBallSpeedY = 7
//console.log(pointsArray)

function randomBlockColor() {
    let j = Math.floor(Math.random()*blockColors.length)
    pointColor = blockColors[j]
}

function tableBall() {
    bctx.fillStyle = 'black'
    bctx.fillRect(0, 0, bctxWidth, bctxHeight)
}

function points() {
    
    for (let i=1; i<5; i++) {
        //console.log('for1')
        for (let j=1; j<30; j++) {
            let tmp = (i-1)*29 + j
            if(pointsArray[tmp] == true) {
                bctx.fillStyle = 'white'
                bctx.fillRect(pointPositionX, pointPositionY, pointSize, pointSize)
                //console.log('warunek')
                if (bounceBallX >= pointPositionX && bounceBallX <= pointPositionX+pointSize) {
                    if (bounceBallY <= pointPositionY+pointSize && bounceBallY >= pointPositionY) {
                    bounceBallSpeedY = -bounceBallSpeedY
                    pointsArray[tmp] = false
                    //console.log(tmp)
                    bounceBallSpeedX += 0.1
                    bounceBallSpeedY += 0.1
                    }

                }
            }
            pointPositionX = pointPositionX + pointSize + 25
            //console.log('for2')
        }
        pointPositionY = pointPositionY + pointSize + 20
        pointPositionX = 10
    }
    pointPositionX = 10
    pointPositionY = 10

    

    for (let i=1; i<pointsArray.length; i++) {
        //console.log('array')
        if(pointsArray[i] == true)
        bounceBallCheck = true
    }

    if(bounceBallCheck = false) {
        bounceBallLoseBool = true
    }

}

function bounceballPlayer(event) {
    bctx.fillStyle = 'green'
    bctx.fillRect(bounceballPlayerX, bounceballPlayerY, bounceballPlayerWidth, bounceballPlayerHeight)
}

function bounceballPlayerPosition(event) {
    bounceballPlayerX = event.clientX - 250

    if(bounceballPlayerX < 0) bounceballPlayerX = 0
    if(bounceballPlayerX+bounceballPlayerWidth > bctxWidth) 
        bounceballPlayerX = bctxWidth-bounceballPlayerWidth
}

function bounceBallLose() {

    if (bounceBallLoseBool == true) {
    bctx.font = "130px Arial"
    bctx.fillStyle = "red"
    bctx.textAlign = "center"
    bctx.fillText("LOSE", bctxWidth/2, bctxHeight/2)
    bounceBallSpeedX = 0
    bounceBallSpeedY = 0
    }
}

function bounceBall() {
    bctx.fillStyle = 'blue'
    bctx.fillRect(bounceBallX, bounceBallY, bounceballSize, bounceballSize)

    bounceBallX += bounceBallSpeedX
    bounceBallY += bounceBallSpeedY

    if(bounceBallY+bounceballSize > bounceballPlayerY) {
        //console.log('warunek1')
        if(bounceBallX > bounceballPlayerX && bounceBallX < bounceballPlayerX+bounceballPlayerWidth) {
            //console.log('warunek2')
            bounceBallSpeedY = -bounceBallSpeedY
        }
    }

    if(bounceBallY > bctxHeight) {
        bounceBallLoseBool = true
    }

    if(bounceBallY < 0) {
        bounceBallSpeedY = -bounceBallSpeedY
    }

    if(bounceBallX <= 0 || bounceBallX >= bctxWidth-bounceballSize)
        bounceBallSpeedX = -bounceBallSpeedX

    }



bounceballcanvas.addEventListener('mousemove', bounceballPlayerPosition)

function bounceballMainFunction() {
    tableBall()
    points()
    bounceballPlayer()
    bounceBall()
    bounceBallLose()
}

setInterval(bounceballMainFunction, 1000/60)