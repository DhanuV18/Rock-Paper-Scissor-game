let choices = document.querySelectorAll('.choices');
let score = document.getElementById('score');
let restart = document.querySelector('#restart');
let result = document.getElementById('result');
let modal = document.querySelector('.modal');
 
let scoreBoard = {
    player: 0,
    computer: 0
};


// Play game

choices.forEach(function(choice){
    choice.addEventListener('click', play)
})  


function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    showWinner(winner, computerChoice);
}

// Computer choice

function getComputerChoice(){
    const random = Math.random();

    if(random < 0.34){
        return 'rock';
    }
    else if (random < 0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

// Winner choice

function getWinner(p , c){
    if( p === c){
        return 'draw';
    }

    else if( p === 'rock'){
        if( c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }

    else if( p === 'paper'){
        if( c === 'scissors'){
            return 'computer';
        }
        else{
            return 'player';
        }

    }

    else if( p === 'scissors'){
        if( c === 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }

    }
}

function showWinner(winner, computerChoice){
    if( winner === 'player'){
        // Increment player score
        scoreBoard.player++;

        result.innerHTML = `
        <h1 class="text-win">You won</h1>
        <span class="list ${computerChoice}"><i class="fa-regular fa-hand-${computerChoice} fa-5x" id="${computerChoice}"></i></span>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    else if( winner === 'computer'){
        // Increment computer score
        scoreBoard.computer++;

        result.innerHTML = `
        <h1 class="text-lose">You lost</h1>
        <span class="list ${computerChoice}"><i class="fa-regular fa-hand-${computerChoice} fa-5x" id="${computerChoice}"></i></span>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    else{
        result.innerHTML = `
        <h1>It's a draw</h1>
        <span class="list ${computerChoice}"><i class="fa-regular fa-hand-${computerChoice} fa-5x" id="${computerChoice}"></i></span>
        <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }

    //show score

    score.innerHTML = `
        <div class="score__player">Player : ${scoreBoard.player}</div>
        <div class="score__computer">Computer : ${scoreBoard.computer}</div>
        `;
        
    modal.style.display = 'flex';
    

    //show modal


}

// Add event Listner

function clearModal(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }

}

function restartGame(){
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
        <div class="score__player">Player : 0</div>
        <div class="score__computer">Computer : 0</div>
    `;
    restart.style.display = 'none';
}


window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);


//Custome background color code

// function changeColor() {
//     let color = document.getElementById('input-color').value;    
//     document.body.style.background = color;  
        
// }

