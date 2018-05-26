/**
 * Created by Tarnos on 2017-06-04.
 */

function GameMapState() {
    gameMap = [];
}

GameMapState.extend(IsState);

GameMapState.prototype.render = function () {
    //grid for testing
    ctx.save();
    ctx.fillStyle = "#191919";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#3f3f3f";
    for (var i = 0; i < GAME_AREA.width; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, GAME_AREA.height);
        ctx.stroke();
    }
    for (var j = 0; j < GAME_AREA.height; j += 32) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(GAME_AREA.width, j);
        ctx.stroke();
    }
    ctx.restore();
    //add image instead of a rect
    ctx.save();
    for (var y = 0; y < gameMap.length; y++) {
        for(var x = 0; x < gameMap[y].length; x++){
            var block = gameMap[y][x];
            if(block) {//if not null, since null means empty tile/block.
                block.update();
                block.render();
            }
        }
    }
    ctx.restore();
    crest.render();
};

GameMapState.prototype.onEnter = function(){
    for(var y = 0; y < map.length; y++){
        gameMap[y] = [];
        for(var x = 0; x < map[y].length; x++){
            var block = map[y][x];
            if(block){
                block = new Wall(x * 32, y * 32, 32, 32, BLOCKS[block]);
            }
            gameMap[y][x] = block;
        }
    }
};