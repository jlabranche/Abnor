export default class MainMenuState extends Phaser.State {
    init () {
        this.game.stage.backgroundColor = '#00f';
    };
    
    preload () {
    };

    create () {
       this.mainMenuButton = this.game.add.button(this.game.width / 2, this.game.height / 2, 'MainMenu', this.startWorldState(), this)
    };

    startWorldState () {
        this.state.start('WorldState');
    };
};
