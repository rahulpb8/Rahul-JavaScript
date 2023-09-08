/*eslint linebreak-style: ["error", "unix"]*/

//Create a tic tac toe game in JS, don't copy the code from any online source, and develop with your logic.
// Play the game from Google to develop the logic, no need to refer to any algorithms or videos.

let oTurn;
let cells = document.querySelectorAll('.cell');
const matchStatus = document.getElementById('status');
const restartButton = document.getElementById('restartButton');
let player1 = document.getElementById('player2');
let player2 = document.getElementById('player1');

restartButton.addEventListener('click', restartGame);

function restartGame() {
    window.location.reload();
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true});
});
function handleClick(e){
    if(!player1.value || !player2.value){
        alert('Enter both player names');
        restartGame();
    }
    else{
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
                cell.removeEventListener('click', handleClick, {once: true});
            });
        }
        else if(isBoardFull()) {
            endMatch(true); 
        }
        swapTurns(); 
    }  
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
    let matchWon = false;
    if(cells[0].classList.contains(currentClass) && cells[1].classList.contains(currentClass) && cells[2].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[3].classList.contains(currentClass) && cells[4].classList.contains(currentClass) && cells[5].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[6].classList.contains(currentClass) && cells[7].classList.contains(currentClass) && cells[8].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[0].classList.contains(currentClass) && cells[3].classList.contains(currentClass) && cells[6].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[1].classList.contains(currentClass) && cells[4].classList.contains(currentClass) && cells[7].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[2].classList.contains(currentClass) && cells[5].classList.contains(currentClass) && cells[8].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[0].classList.contains(currentClass) && cells[4].classList.contains(currentClass) && cells[8].classList.contains(currentClass)){
        matchWon = true;
    }
    else if(cells[2].classList.contains(currentClass) && cells[4].classList.contains(currentClass) && cells[6].classList.contains(currentClass)){
        matchWon = true;
    }
    else{
        matchWon = false;
    }
    return matchWon;
}


function isBoardFull() {
    let boardIsFull = true;
    for (let i = 0; i<cells.length; i++){
        if(!cells[i].classList.contains('x') && !cells[i].classList.contains('o')){
            boardIsFull = false;
        }
    }
    return boardIsFull;

}


function endMatch(draw) {
    if(draw) {
        matchStatus.innerText = 'This game is Draw';
        setTimeout(restartGame, 3000);
    }else{
        if(oTurn) {
            matchStatus.innerText = `${player1.value} wins`;
            setTimeout(restartGame, 3000);
        }
        else {
            matchStatus.innerText = `${player2.value} wins`;
            setTimeout(restartGame, 3000);
        }
    }
    
}
