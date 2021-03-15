let squares = document.querySelectorAll('.Square1024');
squares = [...squares];
squaresLength = squares.length;

for(let i=0; i<16; i++) {
    squares[i].innerHTML = 0;
}

//console.log(squares);

function generate() {
    let randomNumber = Math.floor(Math.random() * squaresLength);
    if (squares[randomNumber].innerHTML == 0) {
        squares[randomNumber].innerHTML = 2;
    } else generate()
}

function moveRight() {
    for(let i=0; i<16; i++) {
        if (i % 4 === 0) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+1].innerHTML;
            let totalThree = squares[i+2].innerHTML;
            let totalFour = squares[i+3].innerHTML;
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            //console.log(row);

            let filteredRow = row.filter(num => num)
            //console.log(filteredRow)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = zeros.concat(filteredRow)
            //console.log(newRow)

            squares[i].innerHTML = newRow[0]
            squares[i+1].innerHTML = newRow[1]
            squares[i+2].innerHTML = newRow[2]
            squares[i+3].innerHTML = newRow[3]
        }
    }
}

function moveLeft() {
    for(let i=0; i<16; i++) {
        if (i % 4 === 0) {
            let totalOne = squares[i].innerHTML;
            let totalTwo = squares[i+1].innerHTML;
            let totalThree = squares[i+2].innerHTML;
            let totalFour = squares[i+3].innerHTML;
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

            //console.log(row);

            let filteredRow = row.filter(num => num)
            //console.log(filteredRow)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = filteredRow.concat(zeros)
            //console.log(newRow)

            squares[i].innerHTML = newRow[0]
            squares[i+1].innerHTML = newRow[1]
            squares[i+2].innerHTML = newRow[2]
            squares[i+3].innerHTML = newRow[3]
        }
    }
}

function moveDown() {
    for (let i=0; i<4; i++) {
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+4].innerHTML
        let totalThree = squares[i+8].innerHTML
        let totalFour = squares[i+12].innerHTML

        let column =  [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = zeros.concat(filteredColumn)

        squares[i].innerHTML = newColumn[0]
        squares[i+4].innerHTML = newColumn[1]
        squares[i+8].innerHTML = newColumn[2]
        squares[i+12].innerHTML = newColumn[3]
    }
}

function moveUp() {
    for (let i=0; i<4; i++) {
        let totalOne = squares[i].innerHTML
        let totalTwo = squares[i+4].innerHTML
        let totalThree = squares[i+8].innerHTML
        let totalFour = squares[i+12].innerHTML

        let column =  [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        let filteredColumn = column.filter(num => num)
        let missing = 4 - filteredColumn.length
        let zeros = Array(missing).fill(0)
        let newColumn = filteredColumn.concat(zeros)

        squares[i].innerHTML = newColumn[0]
        squares[i+4].innerHTML = newColumn[1]
        squares[i+8].innerHTML = newColumn[2]
        squares[i+12].innerHTML = newColumn[3]
    }
}

function combineRow() {
    for(let i=0; i<15; i++) {
        if (squares[i].innerHTML === squares[i+1].innerHTML) {
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i+1].innerHTML = 0
        }
    }
}

function combineColumn() {
    for(let i=0; i<12; i++) {
        if (squares[i].innerHTML === squares[i+4].innerHTML) {
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+4].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i+4].innerHTML = 0
        }
    }
}

function classCheck() {
    for(let i=0; i<16; i++) {
        if(squares[i].innerHTML == 0)
            squares[i].classList.add('s');
        else
            squares[i].classList.remove('s');
    }
}

function Right() {
    moveRight()
    combineRow()
    moveRight()
    generate()
    classCheck()
}

function Left() {
    moveLeft()
    combineRow()
    moveLeft()
    generate()
    classCheck()
}

function Down() {
    moveDown()
    combineColumn()
    moveDown()
    generate()
    classCheck()
}

function Up() {
    moveUp()
    combineColumn()
    moveUp()
    generate()
    classCheck()
}

generate();
generate();
classCheck()

