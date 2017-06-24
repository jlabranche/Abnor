export default class MainMenuState extends Phaser.State {
    init () {
        this.game.stage.backgroundColor = '#555';
    }

    preload () {
    }

    create () {
       this.mainMenuButton = this.game.add.button(this.game.width / 2, this.game.height / 2, 'MainMenu', this.startWorldState, this);
        this.mainMenuButton.anchor.setTo(0.5);
        this.mainMenuButton.scale.setTo(0.5);
    }

    startWorldState () {
        // this.state.start('World');
        this.state.start('Map');
    }
};
