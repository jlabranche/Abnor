import Entity from '../entity';
import Frighten from '../actions/frighten';

export default class Ghost extends Entity {
    constructor (game, x, y, key = 'mobs', frame = 'ghost_default', element = 'fire') {
        super(game, x, y, key, frame, element);

        this.addAction(new Frighten());
        this.addAction(new Frighten());
        this.addAction(new Frighten());
        this.addAction(new Frighten());
    }
}
