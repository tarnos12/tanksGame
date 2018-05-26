/**
 * Created by Tarnos on 2017-06-02.
 */

var GAME_AREA = {width: 672, height: 640, x: 0, y: 0};
var gameMap = [];
var map = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, null, null, 1, 1, 1, 1, 1, null, null, null, null], [null, null, null, null, null, null, null, 1, 1, 1, 1, 1, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, 1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, 1, 1, null, null, 1, 1, 1, 1, 1, null, null, null, null, null, 1, null, null], [null, null, null, null, 1, null, null, null, null, null, 1, null, null, null, null, 2, null, null, 1, null, null], [null, null, null, null, 2, 2, null, 2, 2, null, 1, null, 2, 2, 2, 2, null, 1, 1, null, null], [null, null, null, 1, null, null, null, null, null, null, 1, null, null, null, null, null, null, 1, null, null, null], [null, null, null, 1, null, null, null, null, null, null, 1, null, null, null, null, null, null, 1, null, 1, null], [null, null, null, 1, 1, 1, 1, null, null, null, null, null, null, null, null, null, 1, null, null, 1, null], [null, null, null, null, null, null, 1, null, 1, null, null, null, null, null, null, null, 1, null, 1, 1, null], [null, null, null, null, 1, null, 1, 1, null, null, null, 1, null, null, null, null, 1, null, 1, null, null], [null, null, null, null, null, null, 1, null, null, null, 1, null, null, null, null, null, 1, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, 1, 1, 1, 1, null, null, null, null, 1, 1, null, null], [null, null, null, 2, null, null, null, null, 1, 1, 1, 1, 1, null, null, null, null, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, 1, 1, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, null, 1, null, null, null, null, null, null, null, null, null]];
var savedMaps = {};
var debugMapSave = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, null, null, 1, 1, 1, 1, 1, null, null, null, null], [null, null, null, null, null, null, null, 1, 1, 1, 1, 1, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, 1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, 1, 1, null, null, 1, 1, 1, 1, 1, null, null, null, null, null, 1, null, null], [null, null, null, null, 1, null, null, null, null, null, 1, null, null, null, null, 2, null, null, 1, null, null], [null, null, null, null, 2, 2, null, 2, 2, null, 1, null, 2, 2, 2, 2, null, 1, 1, null, null], [null, null, null, 1, null, null, null, null, null, null, 1, null, null, null, null, null, null, 1, null, null, null], [null, null, null, 1, null, null, null, null, null, null, 1, null, null, null, null, null, null, 1, null, 1, null], [null, null, null, 1, 1, 1, 1, null, null, null, null, null, null, null, null, null, 1, null, null, 1, null], [null, null, null, null, null, null, 1, null, 1, null, null, null, null, null, null, null, 1, null, 1, 1, null], [null, null, null, null, 1, null, 1, 1, null, null, null, 1, null, null, null, null, 1, null, 1, null, null], [null, null, null, null, null, null, 1, null, null, null, 1, null, null, null, null, null, 1, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, 1, 1, 1, 1, null, null, null, null, 1, 1, null, null], [null, null, null, 2, null, null, null, null, 1, 1, 1, 1, 1, null, null, null, null, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 1, 1, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, 1, 1, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, 1, null, 1, null, null, null, null, null, null, null, null, null]];
var currentMapId = "0";

function saveMap() {
    savedMaps[currentMapId] = debugMapSave;
    localStorage.setItem("maps", JSON.stringify(savedMaps));
}
function changeCurrentId(id) {
    saveMap();
    currentMapId = id;
    loadMap(id);
}
function loadMap(id) {
    createEmptyMap();
    var loaded = localStorage.getItem('maps');
    if (loaded) {
        savedMaps = JSON.parse(loaded);
        if (!savedMaps[id]) {
            return;
        }
        for (var y = 0; y < savedMaps[id].length; y++) {
            for (var x = 0; x < savedMaps[id][y].length; x++) {
                var block = savedMaps[id][y][x];
                if (block) {
                    gameMap[y][x] = new Wall(x * 32, y * 32, 32, 32, BLOCKS[block]);
                }
            }
        }
        return true;

    }
}

function createEmptyMap() {
    var width = GAME_AREA.width / 32;
    var height = GAME_AREA.height / 32;
    for (var i = 0; i < height; i++) {
        gameMap[i] = [];
        for (var j = 0; j < width; j++) {
            //default empty block, empty wall
            gameMap[i][j] = null;
        }
    }
}

createEmptyMap();