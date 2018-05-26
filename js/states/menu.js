/**
 * Created by Tarnos on 2017-05-29.
 */

function MainMenuState(buttonList) {
    this.buttons = [];
    this.buttonsList = buttonList;
    this.init = function () {
        for(var i = 0; i < this.buttonsList.length; i++){
            this.buttons.push(new Button(this.buttonsList[i]));
        }
    };
    this.init();
}

MainMenuState.extend(IsState);

MainMenuState.prototype.update = function () {
    for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].update();
    }
};

MainMenuState.prototype.render = function () {
    for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].render();
    }
};