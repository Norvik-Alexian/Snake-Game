const GameBoard = document.getElementById("GameBoard");
const context = GameBoard.getContext("2d");

let snake = [
    {x:250, y:250},
    {x:240, y:250},
    {x:230, y:250},
    {x:220, y:250},
    {x:210, y:250}
];

function drawSquare(xCordinate, yCordinate, squareColor, borderColor) {
    context.fillStyle = squareColor;
    context.strokeStyle = borderColor;
    context.fillRect(xCordinate, yCordinate, 10, 10);
    context.strokeRect(xCordinate, yCordinate, 10, 10);
}

function showSnake() {
    snake.forEach(element => drawSquare(element.x, element.y, 'lightblue', 'black'));
}

function goSnake() {
    const head = {x: snake[0].x + 10, y: snake[0].y};
    snake.unshift(head);
    snake.pop();
}

function clearBoard() {
    context.fillStyle = "white";
    context.fillRect(0, 0, GameBoard.width, GameBoard.height)
}

function startMoving() {
    setTimeout(() => {
        clearBoard();
        goSnake();
        showSnake();
        startMoving();
    }, 400);
}

startMoving();
