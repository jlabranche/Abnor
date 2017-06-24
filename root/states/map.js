export default class MapState extends Phaser.State {
	constructor (game) {
		super(game);
		this.world_button;
		this.battle_button;
		this.background;
	}

    preload () {
	    this.game.load.spritesheet('left-arrow', '/assets/buttons/f/Sprites/transparentDark/transparentDark22.png', 193, 71);
	    this.game.load.spritesheet('key', '/assets/buttons/f/Sprites/transparentDark/transparentDark27.png', 193, 71);
	}

	create () {
	    this.game.stage.backgroundColor = '#182d3b';
	    this.world_button = this.game.add.button(25, this.game.height - 100, 'left-arrow', this.startWorldState, this, 2, 1, 0);
	    this.battle_button = this.game.add.button(50, 25, 'key', this.startBattleState, this, 2, 1, 0);
	}

    actionOnClick () {
        console.log('clicky');
    }
    startWorldState () {
        this.state.start('World');
    };
    startBattleState () {
        this.state.start('BattlePrep');
    };
}
