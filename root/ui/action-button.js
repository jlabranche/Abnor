export default class ActionButton extends Phaser.Group {
    constructor(game, x, y, action) {
        super(game, x, y, 'buttons');

        this.action = action;

        const MAX_BUTTONS_IN_ROW = 4;
        const THIN_HEIGHT_ADJUST = 1.75;

        this.button = new Phaser.Button(game, 0, 0, 'buttons');
        this.button.frame = 'Black';
        this.button.width = this.game.width / MAX_BUTTONS_IN_ROW;
        this.button.height = this.game.height / THIN_HEIGHT_ADJUST / MAX_BUTTONS_IN_ROW;

        this.label = new Phaser.Text(game, 0, 0, this.action.label, {
            font: '20pt Arial',
            fill: 'white',
            stroke: 'white'
        });
        this.label.x = this.button.width / 2 - this.label.width / 2;
        this.label.y = this.button.height / 2 - this.label.height / 2;

        this.add(this.button);
        this.add(this.label);
    }

    onClick () {
        // click
    }
}
