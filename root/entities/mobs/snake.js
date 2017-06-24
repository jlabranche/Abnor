import Entity from '../entity';

export default class Ghost extends Entity {
    constructor (game, x, y, key = 'mobs', frame = 'snake_default') {
        super(game, x, y, key, frame);
    }
}
