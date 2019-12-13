/* 
You should add the tiles of gameboard to the dom 
ai must select random tile on the gameboard
You will select tiles and the game will  indeicate a HIT or a miss
on HIT the game is over 
Add a button to start a new game
*/

let tile = document.getElementById('gameboard');


let container = document.createElement('div'); //I am using Bootstrap so this container is holding the elements below
container.className = 'container';
tile.appendChild(container);


let winner = 'false'
// var hitAI = Math.floor(Math.random() * 9);// math.floor starts from 0 and randomly picking a number 0-8.

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function gameboard() { //creating the individual boxes for the gameboard
    if (winner == 'false') { //This will indicate if the game continues to run or not.
    let row = document.createElement('div');
    row.className = 'row wholeGame';
    container.appendChild(row);    
        for (let j = 0; j < 9; j++) {
        var square = document.createElement('div');
        square.className = 'tile col-sm-4';
        square.setAttribute('data-id', j);
        row.appendChild(square);
        square.addEventListener('click', gameLogic)
        }   
    }      
}
gameboard();
    
    
function gameLogic() {
    if (winner == 'false') {
        let blockID = this.getAttribute('data-id');
        if (getRandomInt(9) == blockID) {
            let backgroundWin = this.classList.add("green");
            winner = 'true';
        } else {
            let backgroundLose = this.classList.add('red');    
        }
    }
}

let resetGame = document.getElementById('reset');

resetGame.addEventListener('click', newGame);

function newGame() {
    winner = 'false';
    let background = document.getElementsByClassName('col-sm-4');
    for (let i = 0; i < background.length; i++) {
        const element = background[i];
        background[i].classList.remove('red', 'green')
    }
    getRandomInt(9)
}

