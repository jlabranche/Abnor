export default class ArenaState extends Phaser.State {
    constructor (game) {
        super(game);
    }

    preload () {
    }

    create () {
        this.beginBattlePrep();
    }

    beginBattlePrep () {
        this.state.start('BattlePrep');
    }
}
