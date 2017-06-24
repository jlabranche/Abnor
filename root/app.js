// import states
import BootState from './states/boot';
import MainMenuState from './states/main-menu';
import WorldState from './states/world';
import MapState from './states/map';
import BattleState from './states/battle';

require('./index.html');

let game = new Phaser.Game(640, 360);

Phaser.Device.whenReady(function () {
    // plugins
    game.__plugins = game.__plugins || {};

    // add plugins here
    // ...

    // setup global namespace under game for our global data
    game.global = {};

    // states
    game.state.add('Boot', BootState);
    game.state.add('MainMenu', MainMenuState);
    game.state.add('World', WorldState);
    game.state.add('Map', MapState);
    game.state.add('Battle', BattleState);

    game.state.start('Boot');
});
