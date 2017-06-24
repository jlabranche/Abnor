/**
 * Stat multipler can apply a multiplication factor to one or more stats.
 *
 * const doubleAttack = new StatMultiplier('basic', 100, 3, [], [{stat: 'attack', multiplier: 2}]);
 * const effectiveAttack = doubleAttack.attack(40);   // 80
 */

import StatModifier from 'stat-modifier';

export default class StatMultiplier extends StatModifier () {
    constructor (type, priority, duration, stackBehaviors, multipliers) {
        super(type, priority, duration, stackBehaviors,
            multipliers.map(def => { return {stat: def.stat, modifier: val => val * def.multiplier}; }));

        this._multipliers = multipliers;
    }

    get multipliers () { return this._multipliers; }
}
