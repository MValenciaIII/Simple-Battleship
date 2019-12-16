/* 
You should add the tiles of gameboard to the dom 
ai must select random tile on the gameboard
You will select tiles and the game will  indeicate a HIT or a miss
on HIT the game is over 
Add a button to start a new game
*/

let tile = document.getElementById('gameboard');
let easyBoard = document.getElementById('easy');
let mediumBoard = document.getElementById('normal');

let container = document.createElement('div'); //I am using Bootstrap so this container is holding the elements below
container.className = 'container';
tile.appendChild(container);


let winner = 'false'
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
// var hitAI = Math.floor(Math.random() * 9);// math.floor starts from 0 and randomly picking a number 0-8.
 easyBoard.addEventListener('click', easy);
mediumBoard.addEventListener('click', normal);
function easy() {
    let hide = document.querySelectorAll('.mediumGame .tile');
    for (let i = 0; i < hide.length; i++) {
        const element = hide[i];
        hide[i].classList.remove('tile', 'red', 'green')
    }


    function gameboard() { //creating the individual boxes for the gameboard
        if (winner == 'false') { //This will indicate if the game continues to run or not.
        let row = document.createElement('div');
        row.className = 'row easyGame';
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
                winnereasy = 'true';
            } else {
                let backgroundLose = this.classList.add('red');    
            }
        }
    }
}

function normal() {
    let hide = document.querySelectorAll('.easyGame .tile');
    for (let i = 0; i < hide.length; i++) {
        const element = hide[i];
        hide[i].classList.remove('tile', 'red', 'green')
    }

    function gameboard() { //creating the individual boxes for the gameboard
        if (winner == 'false') { //This will indicate if the game continues to run or not.
        let row = document.createElement('div');
        row.className = 'row mediumGame';
        container.appendChild(row);    
            for (let j = 0; j < 16; j++) {
            var square = document.createElement('div');
            square.className = 'tile col-sm-3';
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
            if (getRandomInt(17) == blockID) {
                let backgroundWin = this.classList.add("green");
                winner = 'true';
                resetNormal ='true'
            } else {
                let backgroundLose = this.classList.add('red');    
            }
        }
    }
}

let resetGame = document.getElementById('reset');
resetGame.addEventListener('click', newGame);
function newGame() {
    winner = 'false';
    let background = document.getElementsByClassName('tile');
    for (let i = 0; i < background.length; i++) {
        const element = background[i];
        background[i].classList.remove('red', 'green')
    }
    if (winnereasy == 'true') {
        getRandomInt(9)
    } else if (winnerNormal == 'true') {
        getRandomInt(17)
    }
}

