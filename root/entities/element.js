export default class Element {
    constructor (config) {
        this._weakness = config.weakness;
    }

    set weakness (weakness) { this._weakness = weakness; }

    get weakness () { return this._weakness; }
}
