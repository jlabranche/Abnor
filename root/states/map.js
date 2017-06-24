export default class MapState extends Phaser.State {
	constructor (game) {
		super(game);
		this.button;
		this.background;
	}

    preload () {
	    this.game.load.spritesheet('button', '/assets/buttons/button_sprite_sheet.png', 193, 71);
	}

	create () {
	    this.game.stage.backgroundColor = '#182d3b';
	    this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);
	}

    actionOnClick () {
        console.log('clicky');
    }
}
