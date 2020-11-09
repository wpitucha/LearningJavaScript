let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let s3 = document.getElementById('s3');

let s4 = document.getElementById('s4');
let s5 = document.getElementById('s5');
let s6 = document.getElementById('s6');

let s7 = document.getElementById('s7');
let s8 = document.getElementById('s8');
let s9 = document.getElementById('s9');

s1.addEventListener('click', function() { gra(1); });
s2.addEventListener('click', function() { gra(2); });
s3.addEventListener('click', function() { gra(3); });

s4.addEventListener('click', function() { gra(4); });
s5.addEventListener('click', function() { gra(5); });
s6.addEventListener('click', function() { gra(6); });

s7.addEventListener('click', function() { gra(7); });
s8.addEventListener('click', function() { gra(8); });
s9.addEventListener('click', function() { gra(9); });


const player1 = 'X';
const player2 = 'O';

let rundy = 0;

const board =[['', '', ''],
              ['', '', ''],
              ['', '', '']];

const kombinacje = [ [1,2,3], [4,5,6], [7,8,9],
                     [1,4,7], [2,5,8], [3,6,9],
                     [1,5,9], [3,5,7] ];



function gra(nr) {
    //alert(nr);

    const {row, column} = event.target.dataset;
    const turn = rundy % 2 === 0 ? player2 : player1;

    if (rundy%2 == 0) {
        document.getElementById('s'+nr).innerHTML = player2;
        console.log(player2+' wybrał pole nr: '+nr);
        $('#s'+nr).addClass('sDisabeledO');
    }
    else {
        document.getElementById('s'+nr).innerHTML = player1;
        console.log(player1+' wybrał pole nr: '+nr);
        $('#s'+nr).addClass('sDisabeledX');
    }

    event.target.classList.add(turn);
    board[row][column] = turn;

    rundy++;
    document.getElementById('ticRundy').innerHTML = 'Ruchy: '+rundy;
    
    if(rundy%2 == 0)
        document.getElementById('s'+nr).style.color = 'red';
    else
        document.getElementById('s'+nr).style.color = 'red';

    console.log(sprawdz());
}


function sprawdz() {
    if (rundy == 9) $('#ticWynik').html('Remis!');
    let winner = null;

    const result = board.reduce((total, row) => total.concat(row));
    console.log(result);

    moves = {
        'X': [],
        'O': []
    };
    result.forEach((field, index) => moves[field] ? moves[field].push(index) : null);
    console.log(moves);

    if (kombinacje.every)(index => moves[player1].indexOf(index > -1)); {
        Winner = 'X won';
    }
    if (kombinacje.every)(index => moves[player2].indexOf(index > -1)); {
        Winner = 'O won';
    }
}