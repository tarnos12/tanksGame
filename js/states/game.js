/**
 * Created by Tarnos on 2017-05-29.
 */

function GameState(){
    this.player = new Player({x: 320, y: 320});
}

GameState.extend(IsState);

GameState.prototype.update = function () {
    this.player.update();
};

GameState.prototype.render = function () {
    this.player.render();
};