

//board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var sankeX = blockSize * 9;
var snakeY = blockSize * 9;

var velocityX = 0;
var velocityY = 0;
//food
var foodX; 
var foodY;


window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //Used for drawing on the board


    placeFood();
    document.addEventListener("keyup", changeDireciton)
    //updateBoard();
    setInterval(updateBoard, 1000/10); //100ms runs update
}

function updateBoard(){
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle="lime";
    sankeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(sankeX, snakeY, blockSize, blockSize);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

function changeDireciton(e){
    if(e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}