export default class ActionButton extends Phaser.Group {
    constructor(game, x, y, action) {
        super(game, x, y, 'buttons');

        this.action = action;

        this.button = new Phaser.Button(game, 0, 0, 'buttons');
        this.button.frame = 'Black';
        this.button.width = this.width;
        this.button.height = this.height;

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
