import AllEntities from '../entities/all-entities';
import ActionMenu from '../ui/action-menu';

export default class BattleState extends Phaser.State {
    constructor (game) {
        super(game);

        this.allEntities = new AllEntities();
    }

    init () {
        this.heroes = [
            {
                "attack": 30,
                "defense": 30,
                "hitPoints": 300,
                "speed": 30,
            }, // new Entity()
        ];
        this.enemies = [
            {
                "attack": 20,
                "defense": 20,
                "hitPoints": 200,
                "speed": 20,
            }, // new Entity()
        ];
        for (let hero of this.heroes) {
            hero.energy = 0;
        }
        for (let enemy of this.enemies) {
            enemy.energy = 0;
        }
        this.moveEnergy = 100;
        this.audio = {};
    }

    preload () {
        this.game.load.atlas('mobs', '/assets/images/mobs_spritesheet.png', null, this.game.cache.getJSON('mobsJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.game.load.atlas('buttons', '/assets/images/buttons_spritesheet.png', null, this.game.cache.getJSON('buttonsJSON'), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.game.load.audio('slap', '/assets/sounds/slap.mp3');
    }

    create () {
        let ghost = new this.allEntities.mobHash.Ghost(this.game, 0, 0);
        let snake = new this.allEntities.mobHash.Snake(this.game, 100, 0);

        this.game.add.existing(ghost);
        this.game.add.existing(snake);
	    this.world_button = this.game.add.button(15, this.game.height - 65, 'settings', this.openSettings, this, 2, 1, 0);
        this.world_button.fixedToCamera = true;

        this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.step, this);

        // test action menu for ghost
        this.actionMenu = new ActionMenu(this.game);

        //this.actionMenu.display(ghost.actions);

        this.audio.slapper = this.game.add.audio('slap');
        this.audio.slapper.play();

        this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.step, this);
    }

    step () {
        for (let hero of this.heroes) {
            hero.energy += hero.speed;
            if (hero.energy >= this.moveEnergy) {
                this.attack(hero, this.enemies[0]);
                hero.energy -= this.moveEnergy;
            }
        }
        for (let enemy of this.enemies) {
            enemy.energy += enemy.speed;
            if (enemy.energy >= this.moveEnergy) {
                this.attack(enemy, this.heroes[0]);
                enemy.energy -= this.moveEnergy;
            }
        }

        console.log('===========');
        console.log('this.heroes: ', this.heroes);
        console.log('this.enemies: ',  this.enemies);
        console.log('===========');
        console.log('');
    }

    roll (max) {
        return Math.floor(Math.random() * max) + 1;
    }

    attack (attacker, defender) {
        console.log(attacker, ' attacks ', defender);
        let damage = this.roll(attacker.attack);
        let defense = this.roll(defender.defense);
        console.log('Damage/Defense: ', damage, defense);
        damage -= defense;
        if (damage > 0) {
            defender.hitPoints -= damage;
        }
        if (defender.hitPoints <= 0) {
            console.log(defender, ' died!');
        }
    }
    openSettings() {
        
    }
}
