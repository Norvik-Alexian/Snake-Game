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

showSnake();