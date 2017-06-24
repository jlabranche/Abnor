export default class Entity extends Phaser.Sprite () {
    constructor (game, x, y, key, frame) {
        super(game, x, y, key, frame);

        this._attack = 0;
        this._defense = 0;
        this._hitPoints = 0;
        this.speed = 0;
    }

    get attack () { return this._attack; }

    set attack (val) { this._attack = val; }

    get defense () { return this._defense; }

    set defense (val) { this._defense = val; }

    get hitPoints () { return this._hitPoints; }

    set hitPoints (val) { this._hitPoints = val; }

    get speed () { return this._speed; }

    set speed (val) { this._speed = val; }
}
