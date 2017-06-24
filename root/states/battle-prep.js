export default class BattlePrepState extends Phaser.State {
    constructor (game) {
        super(game);
    }

    preload () {
    }

    create () {
        this.beginBattle();
    }

    beginBattle () {
        this.state.start('Battle');
    }
}
