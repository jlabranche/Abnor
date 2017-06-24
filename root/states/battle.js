import Entity from '../entities/entity';

export default class BattleState extends Phaser.State {
    constructor (game) {
        super(game);

        console.log(this.game);
    }

    preload () {
        this.game.load.atlas('enemies', '/assets/images/enemy_spritesheet.png', null, this.game.cache.getJSON('enemiesJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    }

    create () {
        console.log(this.game);
        //let entity = new Entity(this.game, 0, 0, 'enemies', 'ghost_default');
        //let entity = new Entity(this.game, 0, 0);
        //console.log(entity);

        //this.game.add.existing(entity);
    }
}
