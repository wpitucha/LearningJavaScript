const canvas = document.getElementById('pongGame');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw/2 - ballSize/2;
let ballY = ch/2 - ballSize/2;

const paddelHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;
let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 2;
let ballSpeedY = 2;


function player() {
    ctx.fillStyle = '#2f2';
    ctx.fillRect(playerX, playerY, paddleWidth, paddelHeight);
}

function ai() {
    ctx.fillStyle = '#ff0';
    ctx.fillRect(aiX, aiY, paddleWidth, paddelHeight);
}

function ball() {
    ctx.fillStyle = '#fff';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp();
    };

    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    };

    if ((ballX <= playerX + paddleWidth) && (ballY + ballSize / 2 >= playerY) && (ballY + ballSize / 2 <= playerY + paddelHeight)) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }

    if ((ballX + ballSize >= aiX) && (ballY + ballSize / 2 >= aiY) && (ballY + ballSize / 2 <= aiY + paddelHeight)) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }

    
}

function table() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, cw, ch);

    for (let linePostion = 20; linePostion<ch; linePostion+=30) {
        ctx.fillStyle = "#666";
        ctx.fillRect(cw/2 - lineWidth/2, linePostion, lineWidth, lineHeight);
    }
}

let topCanvas = canvas.scrollTop;
//console.log(topCanvas);

function playerPositionT(event) {
    playerY = event.clientY - topCanvas - 264 - paddelHeight/2;
    //console.log("Pozycja myszy to " + (event.clientY - topCanvas - 264));

    if (playerY >= ch - paddelHeight) playerY = ch - paddelHeight;
    if (playerY <= 0) playerY = 0;

    //aiY = playerY;
};

function speedUp() {
    //console.log('speed up!');

    if (ballSpeedX > 0 && ballSpeedX < 16) {
        ballSpeedX += 0.2;
    }
    else if (ballSpeedX < 0 && ballSpeedX > -16) {
        ballSpeedX -= 0.2;
    }

    if (ballSpeedY > 0 && ballSpeedY < 16) {
        ballSpeedY += 0.2;
    }
    else if (ballSpeedY < 0 && ballSpeedY > -16) {
        ballSpeedY -= 0.2;
    }
}

function aiPostion() {

    let middlePaddel = aiY + paddelHeight/2;
    let middleBall = ballY + ballSize/2;

    if (ballX > 500) {
        if (middlePaddel - middleBall > 200) {
            //console.log("+200");
            aiY -= 25;
        }
        else if (middlePaddel - middleBall > 50) {
            //console.log("+50-200");
            aiY -= 10;
        }
        else if (middlePaddel - middleBall < -200) {
            //console.log("-200");
            aiY += 25;
        }
        else if (middlePaddel - middleBall < -50) {
            //console.log("-50 -(-200)");
            aiY += 10;
        }
    }
    else if (ballX && ballX > 150) {
        if (middlePaddel - middleBall > 100) {
            aiY -= 3;
        }
        else if (middlePaddel - middleBall < -100) {
            aiY += 3;
        }
    }
}

function check() {
    if (ballX <= 0) {
        //console.log('LEWA!');
        clearInterval();
    }
    else if (ballX >= cw) {
        //console.log('PRAWA!');
        clearInterval();
    }
}

canvas.addEventListener('mousemove', playerPositionT)

function game() {
table();
ball();
player();
ai();
aiPostion();
check();
}

setInterval(game, 1000/60);
