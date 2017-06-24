import Ghost from '../entities/mobs/ghost';

export default class BattleState extends Phaser.State {
    constructor (game) {
        super(game);
    }

    preload () {
        this.game.load.atlas('mobs', '/assets/images/mobs_spritesheet.png', null, this.game.cache.getJSON('mobsJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    }

    create () {
        let ghost = new Ghost(this.game, 0, 0);

        this.game.add.existing(ghost);
    }
}
