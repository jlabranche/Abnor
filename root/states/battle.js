import Ghost from '../entities/mobs/ghost';

export default class BattleState extends Phaser.State {
    constructor (game) {
        super(game);
    }

    init () {
        this.heroes = [
            {
                "attack": 30,
                "defense": 30,
                "hitPoints": 3000,
                "speed": 30,
            }, // new Entity()
        ];
        this.enemies = [
            {
                "attack": 20,
                "defense": 20,
                "hitPoints": 2000,
                "speed": 20,
            }, // new Entity()
        ];
        this.moveEnergy = 100;
        this.tickLength = 3000; // milliseconds
        this.tick = int(new Date.getTime() / this.tickLength);
        this.step()
    }

    preload () {
        this.game.load.atlas('mobs', '/assets/images/mobs_spritesheet.png', null, this.game.cache.getJSON('mobsJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    }

    create () {
        let ghost = new Ghost(this.game, 0, 0);

        this.game.add.existing(ghost);
    }
    update () {
        let tick = int(new Date.getTime() / this.tickLength);
        if (tick > this.tick) {
            this.step();
        }
    }

    step () {
        for (hero of this.heroes) {
            hero.energy += hero.speed;
            if (hero.speed >= this.moveEnergy) {
                hero.attack(enemies[0]);
            }
        }
        for (enemy of this.enemies) {
            enemy.energy += enemy.speed;
            if (enemy.speed >= this.moveEnergy) {
                enemy.attack(heroes[0]);
            }
        }

        console.log('===========');
        console.log('this.tick: ' + this.tick);
        console.log('this.heroes: ' + this.heroes);
        console.log('this.enemies: ' + this.enemies);
        console.log('===========');
        console.log('');
    }
   
    roll (max) {
        Math.floor(Math.random() * max) + 1;
    }

    attack (attacker, defender) {
        console.log(attacker + ' attacks ' + defender);
    }
}
