/**
 * Created by Tarnos on 2017-06-18.
 */

function GameOverState() {
}

GameOverState.extend(IsState);

GameOverState.prototype.update = function () {
    if(mouseDown){
        gameMode.change("menu");
    }
};

GameOverState.prototype.render = function () {
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);
    ctx.fillText("Press a mouse button to continue", canvas.width / 2, canvas.height / 2 + 50);
};