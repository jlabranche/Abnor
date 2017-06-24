/**
 * Stat modifier can apply an arbitrary modification to one or more stats.
 *
 * const freezeEffect = new StatModifier('elemental', 100, 3, [], [{stat: 'speed', modifier: val => val - 5}]);
 * const effectiveSpeed = freezeEffect.speed(20);     // 15
 */

import StatusEffect from 'status-effect';

export default class StatModifier extends StatusEffect () {
    constructor (type, priority, duration, stackBehaviors, modifiers) {
        super(type, priority, duration, stackBehaviors);

        this._modifiers = modifiers;
    }

    get modifiers () { return this._modifiers; }

    attack      (val) { return this.modifiedStat('attack',      val); }
    defense     (val) { return this.modifiedStat('defense',     val); }
    hitPoints   (val) { return this.modifiedStat('hitPoints',   val); }
    speed       (val) { return this.modifiedStat('speed',       val); }

    modifiedStat(stat, val) {
        for (let modifier in this._modifiers) {
            if (modifier.stat === stat) {
                val = modifier.modify(val);
            }
        }
        return val;
    }
}
