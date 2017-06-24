import Action from '../entities/action';
import ActionButton from './action-button';

export default class ActionMenu extends Phaser.Group {
    constructor (game) {
        super(game);

        this.visible = false;

        this.MAX_BUTTONS_IN_ROW = 4;
        this.BUTTON_HEIGHT_ADJUST = 1.75;

        this.buttonWidth = this.game.width / this.MAX_BUTTONS_IN_ROW;
        this.buttonHeight = this.game.height / this.THIN_HEIGHT_ADJUST;
    }

    display (actions) {
        if (!Array.isArray(actions)) {
            throw new Error('actions is not an array.');
        }

        actions.forEach((action) => {
            if (!(action instanceof Action)) {
                return;
            }

            let actionButton = new ActionButton(this.game, 0, 0, action);

            const numChildren = this.children.length;
            actionButton.x = this.buttonWidth * numChildren;
            actionButton.y = this.game.height - 100;

            this.add(actionButton);
        });

        this.show();
    }

    toggle () {
        this.visible = !this.visible;
    }

    show () {
        this.visible = true;
    }

    hide () {
        this.visible = false;
    }
}
