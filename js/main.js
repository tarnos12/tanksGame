/**
 * Created by Tarnos on 2017-05-29.
 */
var crest = new Crest();
function gameLoop() {
    gameMode.clearRect();
    gameMode.update();
    gameMode.render();
    window.requestAnimationFrame(gameLoop);
}

var gameMode = new StateMachine();
gameMode.add(
    "menu", [new MainMenuState(mainMenuButtons)]);
gameMode.add(
    "game", [new GameMapState(), new GameState()]);
gameMode.add(
    "editor", [new GameMapState(), new MapEditorState()]);
gameMode.add(
    "gameOver", [new GameOverState()]);
gameMode.change("menu");//set to menu later on

gameLoop();