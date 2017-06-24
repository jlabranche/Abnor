export default class WorldState extends Phaser.State {

    create() {
        this.game.stage.backgroundColor = '#2d2d2d';

        //  Make our this.game.world 2000x2000 pixels in size (the default is to match the this.game.size)
        this.game.world.setBounds(0, 0, 2000, 2000);

        for (var i = 0; i < 150; i++)
        {
            this.game.add.sprite(this.game.world.randomX, this.game.world.randomY, 'mushroom');
        }

        this.keyboard = this.game.input.keyboard.createCursorKeys();

    }

    update() {
        if (this.game.input.activePointer.isDown) {
            if (this.game.origDragPoint) {
                // move the camera by the amount the mouse has moved since last update
                this.game.camera.x += this.game.origDragPoint.x - this.game.input.activePointer.position.x;
                this.game.camera.y += this.game.origDragPoint.y - this.game.input.activePointer.position.y;
            }
            // set new drag origin to current position
            this.game.origDragPoint = this.game.input.activePointer.position.clone();
        } else {
            this.game.origDragPoint = null;
        }

        if (this.keyboard.up.isDown)
        {
            this.game.camera.y -= 4;
        }
        else if (this.keyboard.down.isDown)
        {
            this.game.camera.y += 4;
        }

        if (this.keyboard.left.isDown)
        {
            this.game.camera.x -= 4;
        }
        else if (this.keyboard.right.isDown)
        {
            this.game.camera.x += 4;
        }

    }
    render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);

    }
}
