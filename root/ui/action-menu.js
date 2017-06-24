import Action from '../entities/action';
import ActionButton from './action-button';

export default class ActionMenu extends Phaser.Group {
    constructor (game) {
        super(game);

        this.visible = false;

        const MAX_BUTTONS_IN_ROW = 4;
        const BUTTON_WIDTH_ADJUST = 1.1;
        const BUTTON_HEIGHT_ADJUST = 6;

        this.buttonX = 130;
        this.buttonXOffset = 10;
        this.buttonY = 40;

        this.buttonWidth = (this.game.width - this.buttonX) / MAX_BUTTONS_IN_ROW / BUTTON_WIDTH_ADJUST;
        this.buttonHeight = this.game.height / BUTTON_HEIGHT_ADJUST;
    }

    display (actions) {
        if (!Array.isArray(actions)) {
            throw new Error('actions is not an array.');
        }

        actions.forEach((action) => {
            if (!(action instanceof Action)) {
                return;
            }

            const numChildren = this.children.length;
            let x = this.buttonX + this.buttonWidth * numChildren;
            if (numChildren > 0) {
                x += this.buttonXOffset * numChildren;
            }
            let y = this.game.height - this.buttonHeight / 2 - this.buttonY;

            let actionButton = new ActionButton(this.game, x, y, action);

            actionButton.setWidth(this.buttonWidth);
            actionButton.setHeight(this.buttonHeight);

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
