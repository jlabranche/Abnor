import Enemy from '../enemy';

export default class Ghost extends Enemy {
    constructor (game, x, y, key = 'enemies', frame = 'ghost_default') {
        super(game, x, y, key, frame);
    }
}
