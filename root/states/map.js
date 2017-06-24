export default class MapState extends Phaser.State {
    constructor (game) {
        super(game);
        this.world_button;
        this.battle_button;
        this.background;
        this.logo2;
        this.cursors;
    }

    preload () {
    }

    create () {
        this.game.world.resize(6000, 600);
        this.game.stage.backgroundColor = '#182d3b';
        this.logo2 = this.game.add.sprite(500, 100, 'phaser');
        this.logo2.fixedToCamera = true;

        this.world_button = this.game.add.button(25, this.game.height - 100, 'left-arrow', this.startWorldState, this, 2, 1, 0);
        this.world_button.fixedToCamera = true;

        this.battle_button  = this.game.add.button(50, 85, 'key', () => { this.startBattlePrepState(0); }, this, 2, 1, 0);
        this.battle_button2 = this.game.add.button(120, 35, 'key', () => { this.startBattlePrepState(1); }, this, 2, 1, 0);
        this.battle_button3 = this.game.add.button(205, 55, 'key', () => { this.startBattlePrepState(2); }, this, 2, 1, 0);

        this.game.add.tween(this.logo2.cameraOffset).to( { y: 400 }, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.game.input.activePointer.isDown) {
            if (this.game.origDragPoint) {
                this.game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
            }
            this.game.origDragPoint = this.game.input.activePointer.position.clone();
        } else {
            this.game.origDragPoint = null;
        }

        if (this.cursors.left.isDown) {
            this.game.camera.x -= 4;
        } else if (this.cursors.right.isDown) {
            this.game.camera.x += 4;
        }
    }

    startWorldState () {
        this.state.start('World');
    }

    startBattlePrepState (id) {
        this.state.start('BattlePrep', true, false, id);
    }
}
