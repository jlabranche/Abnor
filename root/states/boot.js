// json imports
import mobsJSON from '../assets/json/mobs_spritesheet.json';
import buttonsJSON from '../assets/json/buttons_spritesheet.json';

// web fonts
// import WebFont from 'webfontloader';
// require('assets/css/fonts.css');
// require('assets/fonts/[font].ttf');

// require in other assets to be included but not added to cache at this time
require('../assets/buttons/button_sprite_sheet.png');
require('../assets/buttons/f/Sprites/transparentDark/transparentDark48.png');
require('../assets/buttons/f/Sprites/transparentDark/transparentDark31.png');
require('../assets/images/MainMenu.png');
require('../assets/images/mobs_spritesheet.png');
require('../assets/images/buttons_spritesheet.png');

export default class LoadingState extends Phaser.State {
    init () {
        // font loading
        // this.areFontsLoaded = false; // use this if you are loading web fonts
        this.areFontsLoaded = true;

        this.showLoading();
    }

    preload () {
        this.game.cache.addJSON('mobsJSON', null, mobsJSON);
        this.game.cache.addJSON('buttonsJSON', null, buttonsJSON);

        this.load.image('MainMenu', '/assets/images/MainMenu.png');
        this.game.load.spritesheet('left-arrow', '/assets/buttons/f/Sprites/transparentDark/transparentDark22.png', 193, 71);
        this.game.load.spritesheet('key', '/assets/buttons/f/Sprites/transparentDark/transparentDark27.png', 193, 71);
        this.game.load.spritesheet('map-button', '/assets/buttons/f/Sprites/transparentDark/transparentDark48.png', 193, 71);
        this.game.load.spritesheet('settings', '/assets/buttons/f/Sprites/transparentDark/transparentDark31.png', 193, 71);
        this.game.load.spritesheet('auto-pause', '/assets/buttons/f/Sprites/transparentDark/transparentDark12.png', 193, 71);
        this.game.load.spritesheet('auto-play', '/assets/buttons/f/Sprites/transparentDark/transparentDark14.png', 193, 71);
        // load json configuration files
        // this.game.cache.addJSON('jsonConfig', null, jsonConfig);

        // load web fonts
        /* WebFont.load({
            active: function () {
                this.webfontsLoaded();
            }.bind(this),
            custom: {
                families: ['font name'],
                urls: ['/assets/fonts.css']
            }
        }); */
    }

    create () {
        // p2 physics
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        /* this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.restitution = 0.8; */

        // arcade physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    update () {
        if (this.areFontsLoaded) {
            this.state.start('MainMenu');
        }
    }

    showLoading () {
        var loadingText = 'Loading...';

        var text = this.add.text(0, 0, loadingText, {
            font: 'Helvetica, Arial, Sans-Serif',
            fill: '#ffffff',
            fontSize: 48,
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        });

        text.setTextBounds(0, 0, this.world.width, this.world.height);
    }

    webfontsLoaded () {
        this.areFontsLoaded = true;
    }
};
