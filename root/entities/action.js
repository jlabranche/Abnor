export default class Action {
    constructor () {
        this._label = 'Action';
    }

    get label () { return this._label; }

    set label (text) { this._label = text; }
}
