/**
 * A status effect is a modification to an entity's stats; buffs and debuffs.
 *
 * This is a base class and has no effects if a direct instantiation is applied.
 */

export default class StatusEffect {
    constructor (duration) {
        this._duration  = duration;
        this._countdown = duration;
    }

    /* Accessors */
    get duration    () { return this._duration; }
    get countdown   () { return this._countdown; }

    /* Status effect duration management */
    step            () { return --this._countdown; }
    get isExpired   () { if (this._duration === -1) return false; return this._countdown > 0; }

    /* The stats */
    attack      (val) { return val; }
    defense     (val) { return val; }
    hitPoints   (val) { return val; }
    speed       (val) { return val; }
}
