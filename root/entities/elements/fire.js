import Element from '../element';

export default class FireElement extends Element {
    constructor (game) {
        super(game);
        this._weakness = 'water';
    }

    set weakness (weakness) { this._weakness = weakness; }

    get weakness () { return this._weakness; }
}