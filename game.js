const gamesResult = {
    gamesNumber: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    player: "",
    computer: ""
}

const panels = [...document.querySelectorAll(".select img")];

function panelHand() {
    game.player = this.dataset.option;
    panels.forEach(panel => (panel.style.boxShadow = ''));
    this.style.boxShadow = ' 0 0 0 3px green';

}

const computerChoice = () => {
    return panels[Math.floor(Math.random() * 3)].dataset.option;
}

const checkResults = (player, computer) => {
    if (player === computer) {
        console.log('draw')
    } else if ((player === 'paper' && computer === 'rock') || (player === 'rock' && computer === 'scissors') || (player === 'scissors')) {
        console.log('win');
    }
}

const startGame = () => {
    if (game.player === "") {
        alert('select hand');
    }

    gamesResult.draws = checkResults(game.computer, game.player);
    game.computer = computerChoice();
    console.log('computer' + ' ' + game.computer);
    console.log('player' + ' ' + game.player);

}


panels.forEach(panel => panel.addEventListener('click', panelHand));

document.querySelector('.start').addEventListener('click', startGame);
