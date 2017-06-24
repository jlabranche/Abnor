export default class MapState extends Phaser.State {
	constructor (game) {
		super(game);
		this.button;
		this.background;
	}
	create () {
		console.log("made it here");
	    this.game.stage.backgroundColor = '#182d3b';
	    this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
	    this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
	}

	preload () {

	    this.game.load.spritesheet('button', '../../assets/buttons/button_sprite_sheet.png', 193, 71);

	}

}

