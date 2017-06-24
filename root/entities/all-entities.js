import Ghost from './mobs/ghost';
import Snake from './mobs/snake';

export default class AllEntities {
    constructor () {
        this._mobHash = {};

        this.mobList.forEach((mob) => {
            this._mobHash[mob.prototype.constructor.name] = mob;
        });
    }

    get mobList () {
        return [
            Ghost,
            Snake
        ];
    }

    get mobHash () { return this._mobHash; }
}
