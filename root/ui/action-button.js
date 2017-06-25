export default class ActionButton extends Phaser.Group {
    constructor (game, x, y, action) {
        super(game);

        this.x = x;
        this.y = y;

        this.action = action;

        this.button = new Phaser.Button(game, 0, 0, 'buttons');
        this.button.frame = 'Black';

        this.label = new Phaser.Text(game, 0, 0, this.action.label, {
            font: '20pt Arial',
            fill: 'white',
            stroke: 'white'
        });

        this.add(this.button);
        this.add(this.label);
    }

    setWidth (w) {
        this.button.width = w;
        this.label.x = this.button.width / 2 - this.label.width / 2;
    }

    setHeight (h) {
        this.button.height = h;
        this.label.y = this.button.height / 2 - this.label.height / 2;
    }

    onClick () {
        // click
    }
}
