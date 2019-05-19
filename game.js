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
    console.log(game.player)
}

const computerChoice = () => {
    return panels[Math.floor(Math.random() * 3)].dataset.option;
}

const startGame = () => {
    if (game.player === "") {
        alert('select hand');
    }

    game.player = computerChoice();
    console.log('computer' + ' ' + game.player);
}


panels.forEach(panel => panel.addEventListener('click', panelHand));

document.querySelector('.start').addEventListener('click', startGame);
