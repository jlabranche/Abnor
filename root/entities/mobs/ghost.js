import Entity from '../entity';

export default class Ghost extends Entity {
    constructor (game, x, y, key = 'mobs', frame = 'ghost_default') {
        super(game, x, y, key, frame);
    }
}
