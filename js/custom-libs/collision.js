/**
 * Created by Tarnos on 2017-05-30.
 */

function checkMouseCollision(obj) {
    //pass obj of a rectangle/button.
    if (mouseX > obj.x && mouseX < obj.x + obj.width && mouseY > obj.y && mouseY < obj.y + obj.height) {
        return true;
    }
}

function checkCollision(a, b) {
    var a_width = a.width || a.radius;
    var a_height = a.height || a.radius;
    var b_width = b.width || b.radius;
    var b_height = b.height || b.radius;
    if (a.x + a_width > b.x && a.x < b.x + b_width && a.y + a_height > b.y && a.y < b.y + b_height) {
        return true;
    }
}

function worldBoundCollision(obj) {
    if (obj.radius) {
        if (obj.x + obj.radius > GAME_AREA.width || obj.x < 0 || obj.y + obj.radius > GAME_AREA.radius || obj.y < 0) {
            console.log("world bound");
            return true;
        }
    }
    if (obj.x + obj.width > GAME_AREA.width || obj.x < 0 || obj.y + obj.height > GAME_AREA.height || obj.y < 0) {
        console.log("world bound");
        return true;
    }
}


var checkMapCollision = function (obj, isBullet) {
    for (var j = gameMap.length - 1; j >= 0; j--) {
        if(!gameMap[j]){
            continue;
        }
        for (var i = gameMap[j].length - 1; i >= 0; i--) {
            var block = gameMap[j][i];
            if(!block){
                continue;
            }
            if (checkCollision(obj, block)) {
                if (isBullet) {
                    if(checkCollision(obj, crest)){
                        console.log("TEST");
                    }
                    if (obj.damage > block.defense) {
                        block.health -= (obj.damage - block.defense);
                        if (block.health <= 0) {
                            gameMap[j].splice(i, 1);
                        }
                    }
                }
                return true;
            }
        }
    }
};