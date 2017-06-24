import Ghost from './mobs/ghost';

export default class AllEntities {
    constructor () {
        this._mobHash = {};

        this.mobList.forEach((mob) => {
            this._mobHash[mob.prototype.constructor.name] = mob;
        });
    }

    get mobList () {
        return [
            Ghost
        ];
    }

    get mobHash () { return this._mobHash; }
}
