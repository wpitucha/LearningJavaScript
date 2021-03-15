const SnakeCav = document.getElementById('SnakeCav');
const sctx = SnakeCav.getContext('2d');

SnakeCav.width = 1300;
SnakeCav.height = 500;
const ctxWidth = SnakeCav.width;
const ctxHeight = SnakeCav.height;

const snakeHeight = 15;             //wysokosc snakea
let snakeWidth = 75;                //szerokosc snakea

const foodSize = 15;                //wielkosc jedzenia
let snakeX = ctxWidth/2;            //pozycja snakea X
let snakeY = ctxHeight/2;           //pozycja snakea Y
let snakeSpeedX = 5;
let snakeSpeedY = 0;

let foodX;
let foodY;

const tableS = function() {
    sctx.fillStyle = '#000';
    sctx.fillRect(0,0, ctxWidth, ctxHeight);
    //console.log('bialy');
}

const Snake = function() {
    //console.log('poruszam sie');
    //console.log('SNAKEX='+snakeX);
    //console.log('SNAKEY='+snakeY);
    sctx.fillStyle = '#0f0';
    sctx.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);

    snakeX = snakeX+snakeSpeedX;
    snakeY = snakeY+snakeSpeedY;

    if ((snakeX===foodX) && (snakeY===foodY)) {
        food();
    }

    if (snakeX>ctxWidth || snakeX <0) {
        snakeWidth = 75;
        snakeX = ctxWidth/2;
        snakeY = ctxHeight/2;
        snakeSpeedX = 5;
        snakeSpeedY = 0;
    }

    if (snakeY>ctxHeight || snakeY<0) {
        snakeWidth = 75;
        snakeX = ctxWidth/2;
        snakeY = ctxHeight/2;
        snakeSpeedX = 5;
        snakeSpeedY = 0;
    }}

const food = function() {
    foodX = Math.floor(Math.random()*(ctxWidth-foodSize));
    foodY = Math.floor(Math.random()*(ctxHeight-foodSize));

    //console.log('foodX='+foodX);
    //console.log('foodY='+foodY);

    showFood();
}

const showFood = function() {
    sctx.fillStyle = '#fff';
    sctx.fillRect(foodX, foodY, foodSize, foodSize);
}

const snakeUp = function() {
    snakeSpeedX = 0;
    snakeSpeedY = 5;

    sctx.fillStyle = '#0f0';
    sctx.fillRect(snakeX+(snakeWidth-snakeHeight), snakeY+(snakeHeight-snakeWidth), snakeHeight, snakeWidth);
}

food();

const program = function() {
    tableS();
    Snake();
    showFood();
}

setInterval(program, 1000/60);