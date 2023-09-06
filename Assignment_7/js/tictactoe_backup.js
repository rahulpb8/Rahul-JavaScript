let oTurn;
const cells = document.querySelectorAll('.cell');
const matchStatus = document.getElementById('status');
const restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', restartGame);

function restartGame() {
    window.location.reload();
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});
function handleClick(e){
    const cell = e.target;
    let currentClass = 'x';
    if(oTurn) {
        currentClass = 'o';
    }
    else {
        currentClass = 'x';
    }
    placeMark(cell, currentClass);

    if(checkWinner(currentClass)) {
        endMatch(false);
        cells.forEach(cell => {
            cell.removeEventListener('click', handleClick);
        });
    }
    else if(isBoardFull()) {
        endMatch(true); 
    }
    swapTurns();   
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}


function swapTurns(){
    if(oTurn) {
        oTurn = false;
    }
    else {
        oTurn = true;
    }
}

function checkWinner(currentClass) {
    let hasWon = false;

    winConditions.forEach(function (combination) {
        if(combination.every(index => cells[index].classList.contains(currentClass))){
            hasWon = true;
        }
    });
    return hasWon;
}

// function isBoardFull() {
//     for(const cell of cells) {
//         if(cell.classList.contains('x') || cell.classList.contains('o')){
//             return true;
//         }
//     }
//     return false;
// }


function isBoardFull() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
}

function endMatch(draw) {
    if(draw) {
        matchStatus.innerText = 'Draw';
        setTimeout(restartGame, 3000);
    }else{
        if(oTurn) {
            matchStatus.innerText = 'O Wins';
            setTimeout(restartGame, 3000);
        }
        else {
            matchStatus.innerText = 'X wins';
            setTimeout(restartGame, 3000);
        }
    }
    
}