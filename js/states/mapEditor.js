/**
 * Created by Tarnos on 2017-06-04.
 */

function MapEditorState() {
    this.buttons = [];
    this.buttons.push(new Button(
        {
            name: "Save Map",
            stateChange: null,
            fnCall: saveMap,
            width: 120,
            height: 50,
            x: GAME_AREA.width + 5,
            y: GAME_AREA.height / 2
        }
    ));
    this.buttons.push(new Button(
        {
            name: "1",
            stateChange: null,
            fnCall: changeCurrentId,
            fnArgs: "0",
            width: 32,
            height: 40,
            x: GAME_AREA.width + 5,
            y: GAME_AREA.height / 2 + 70
        }
    ));
    this.buttons.push(new Button(
        {
            name: "2",
            stateChange: null,
            fnCall: changeCurrentId,
            fnArgs: "1",
            width: 32,
            height: 40,
            x: GAME_AREA.width + 50,
            y: GAME_AREA.height / 2 + 70
        }
    ));
    this.buttons.push(new Button(
        {
            name: "3",
            stateChange: null,
            fnCall: changeCurrentId,
            fnArgs: "2",
            width: 32,
            height: 40,
            x: GAME_AREA.width + 95,
            y: GAME_AREA.height / 2 + 70
        }
    ));
    this.brush = [];
    this.brushId = 1;
    this.currentBrush = {};
    this.init = function () {
        var y = 0;
        for (var i = 0; i < BLOCKS.length; i++) {//start at 1, cuz 0 is null/empty block
            var x = (i) % 3;
            if (x === 0) {
                y++;
            }
            if (BLOCKS[i] === null) {
                this.brush.push(new Eraser(x * 32 + (x * 4) + GAME_AREA.width + 10, y * 32 + (y * 5) + 60, 32, 32));
                continue;
            }
            this.brush.push(new Wall(x * 32 + (x * 4) + GAME_AREA.width + 10, y * 32 + (y * 5) + 60, 32, 32, BLOCKS[i]));
        }
        this.currentBrush = new Wall(GAME_AREA.width + 46, 50, 32, 32, this.brush[1]);
    };

    this.init();
}
MapEditorState.extend(IsState);
MapEditorState.prototype.update = function () {
    for (var i = 0; i < this.buttons.length; i++) {
        this.buttons[i].update();
    }

    for (var j = 0; j < this.brush.length; j++) {
        if (checkMouseCollision(this.brush[j]) && mouseDown) {
            this.brushId = j;
            if(j === 0){
                this.brushId = null;
                this.currentBrush = new Eraser(GAME_AREA.width + 46, 50, 32, 32, this.brush[j]);
                return;
            }
            this.currentBrush = new Wall(GAME_AREA.width + 46, 50, 32, 32, this.brush[j]);
            return;
        }
    }
    var x = Math.floor(mouseX / 32);
    var y = Math.floor(mouseY / 32);
    if (mouseDown && mouseX > 0 && mouseX < GAME_AREA.width && mouseY > 0 && mouseY < GAME_AREA.height) {
        this.drawBlock(x, y);
    }
};

MapEditorState.prototype.render = function () {
    ctx.save();
    ctx.fillStyle = "#b1b7bd";
    ctx.fillRect(GAME_AREA.width, 0, canvas.width - GAME_AREA.width, canvas.height);
    ctx.strokeText("Selected ", GAME_AREA.width + 60, 20);
    ctx.beginPath();
    ctx.moveTo(GAME_AREA.width, 0);
    ctx.lineTo(GAME_AREA.width, GAME_AREA.height);
    ctx.stroke();
    this.currentBrush.render();
    for (var i = 0; i < this.brush.length; i++) {
        this.brush[i].render();
    }
    for (var j = 0; j < this.buttons.length; j++) {
        this.buttons[j].render();
    }
    ctx.restore();
};

MapEditorState.prototype.drawBlock = function (x, y) {
    var id = get_id(x, y);
    if (x === crest.x / 32 && y === crest.y / 32) {
        return;
    }
    debugMapSave[y] = debugMapSave[y] || [];
    debugMapSave[y][x] = debugMapSave[y][x] || [];
    if(this.currentBrush.isEraser){
        gameMap[y][x] = null;
        debugMapSave[y][x] = 0;//this.brushId == 0...
        return;
    }
    gameMap[y][x] = new Wall(x * 32, y * 32, 32, 32, this.currentBrush, id);
    debugMapSave[y][x] = this.brushId;
    console.log(JSON.stringify(debugMapSave));
};