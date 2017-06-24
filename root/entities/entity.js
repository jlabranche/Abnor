
import Phaser from 'phaser';

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

        this._statusEffects = [];
    }

    get attack () { return this._attack; }

    set attack (val) { this._attack = val; }

    get defense () { return this._defense; }

    set defense (val) { this._defense = val; }

    get hitPoints () { return this._hitPoints; }

    set hitPoints (val) { this._hitPoints = val; }

    get speed () { return this._speed; }

    set speed (val) { this._speed = val; }

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

    get actions () { return this._actions; }

    addAction (action) {
        if (this._actions.length < this.MAX_ACTIONS) {
            this._actions.push(action);
        }
    }

    /* Manage status effects */
    get statusEffects () { return this._statusEffects; }
    addStatusEffect (effect) { this._statusEffects.push(effect); }
    removeStatusEffect (effect) {
        for (let i = 0; i < this._statusEffects.size; ++i) {
            if (this._statusEffects[i] === effect) {
                this._statusEffects.splice(i, 1);
                return;
            }
        }
    }

    /* Call this after each round to remove expired status effects. */
    decreaseStatusEffects () {
        for (let effect in this.statusEffects()) {
            effect.step();
            if (effect.isExpired()) {
                this.removeStatusEffect(effect);
            }
        }
    }

    /* Get the effective value for a particular stat. */
    effectiveStat (stat) {
        let value = this[stat]();
        for (let effect in this._statusEffects) {
            value = effect[stat](value);
        }
        return value;
    }

    get effectiveAttack     () { return this.effectiveStat('attack'); }
    get effectiveDefense    () { return this.effectiveStat('defense'); }
    get effectiveHitPoints  () { return this.effectiveStat('hitPoints'); }
    get effectiveSpeed      () { return this.effectiveStat('speed'); }
}
