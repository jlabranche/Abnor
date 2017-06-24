/**
 * A status effect is a modification to an entity's stats; buffs and debuffs.
 *
 * This is a base class.
 */

export default class StatusEffect {
    constructor (type, priority, duration, stackBehaviors) {
        this._type              = type;
        this._priority          = priority || 0;
        this._duration          = duration;
        this._countdown         = duration;
        this._stackBehaviors    = stackBehaviors || [];
    }

    /* Accessors */
    get type        () { return this._type; }
    get priority    () { return this._priority; }
    get duration    () { return this._duration; }
    get countdown   () { return this._countdown; }

    /* Status effect duration management */
    step            () { return --this._countdown; }
    get isExpired   () { if (this._duration === -1) return false; return this._countdown > 0; }

    /* Determine if an effect can stack with another. */
    canStackWith (other) {
        for (let rule in this._stackBehaviors) {
            if (!rule(this, other)) {
                return false;
            }
        }
        return true;
    }

    /* The stats */
    attack      (val) { return val; }
    defense     (val) { return val; }
    hitPoints   (val) { return val; }
    speed       (val) { return val; }
}

/*
 * Stack behaviors determine if an effect can be applied at the same time as
 * another.
 */
export const StackBehavior = {
    ALWAYS:         () => true,
    NEVER:          () => false,
    NOT_SAME_TYPE:  (a, b) => a.type !== b.type,
};

