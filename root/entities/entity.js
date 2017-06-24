// Elements
import FireElement from './elements/fire';

export default class Entity extends Phaser.Sprite {
    constructor (game, x, y, key, frame, element) {
        super(game, x, y, key, frame, element);

        this._attack = 0;
        this._defense = 0;
        this._hitPoints = 0;
        this._speed = 0;
        this._element = undefined;

        this._actions = [];

        this.MAX_ACTIONS = 4;
    }

    get attack () { return this._attack; }

    set attack (val) { this._attack = val; }

    get defense () { return this._defense; }

    set defense (val) { this._defense = val; }

    get hitPoints () { return this._hitPoints; }

    set hitPoints (val) { this._hitPoints = val; }

    get speed () { return this._speed; }

    set speed (val) { this._speed = val; }

<<<<<<< HEAD
    set element (element) {
        if (typeof this._element === 'undefined') {
            this._element = ((element)=> {
                switch (element) {
                    case 'fire':
                        return FireElement();
                    default:
                        break;
                }
            });
        }
    }

    get element () { return this._element;}
=======
    get actions () { return this._actions; }

    addAction (action) {
        if (this._actions.length < this.MAX_ACTIONS) {
            this._actions.push(action);
        }
    }
>>>>>>> added actions
}
