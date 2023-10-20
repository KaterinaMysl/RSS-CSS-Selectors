import './main.css';
import { Game } from './components/script/game';
import { levels } from './components/script/levels';

document.getElementById('start-button')?.addEventListener('click', () => {
    const infoSection = document.getElementById('info-section');
    const gameSection = document.getElementById('game-section');

    if (infoSection && gameSection) {
        infoSection.style.display = 'none';
        gameSection.style.display = 'block';
    }
});

const game = new Game(levels);
game.start();
game.setup();
