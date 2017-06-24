import Ghost from '../entities/enemies/ghost';

export default class BattleState extends Phaser.State {
    constructor (game) {
        super(game);
    }

    preload () {
        this.game.load.atlas('enemies', '/assets/images/enemy_spritesheet.png', null, this.game.cache.getJSON('enemiesJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    }

    create () {
        let ghost = new Ghost(this.game, 0, 0);

        this.game.add.existing(ghost);
    }
}
