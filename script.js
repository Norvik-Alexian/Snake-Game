const GameBoard = document.getElementById("GameBoard");
const context = GameBoard.getContext("2d");

let snake = [
    {x:250, y:250},
    {x:240, y:250},
    {x:230, y:250},
    {x:220, y:250},
    {x:210, y:250}
];

let stepX = 0;
let stepY = 10;

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
    const head = {x: snake[0].x + stepX, y: snake[0].y + stepY};
    snake.unshift(head);
    snake.pop();
}

function clearBoard() {
    context.fillStyle = "white";
    context.fillRect(0, 0, GameBoard.width, GameBoard.height)
}

document.addEventListener("keydown", function(event) {
    const leftKey = 37;
    const rightKey = 39;
    const upKey = 38;
    const downKey = 40;
})

let direction = 'right';

function changeDirection(event) {
    const pressedKey = event.keyCode;
    const leftKey = 37;
    const rightKey = 39;
    const upKey = 38;
    const downKey = 40;
    switch(pressedKey) {
        case leftKey:
            if (direction != 'right') {
                stepX = -10;
                stepY = 0;
                direction = 'left';
            }
            break;
        case rightKey:
            if (direction != 'left') {
                stepX = 10;
                stepY = 0;
                direction = 'right';
            }
            break;
        case upKey:
            if (direction != 'down') {
                stepX = 0;
                stepY = -10;
                direction = 'up';
            }
            break;
        case downKey:
            if (direction != 'up') {
                stepX = 0;
                stepY = 10;
                direction = 'down';
            }
            break;
    }
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
