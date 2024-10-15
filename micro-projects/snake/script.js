const playBoard = document.querySelector(".play-board");
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let speedX = 0, speedY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

//Init high score
let highScore = localStorage.getItem("high-score") || 0;
highScoreDisplay.innerHTML = `High score : ${highScore}`;


//Food position
const updateFoodPos = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver=()=> {
    clearInterval(setIntervalId);
    alert("GAME OVER ! Press ok to replay...");
    location.reload();
}

//update speed on key press
const changeDirection = e => {
    console.log(e);
    if (e.key === "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
    } else if (e.key === "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
    } else if (e.key === "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
    } else if (e.key === "ArrowRight" && speedX != 1) {
        speedX = 1;
        speedY = 0;
    }
}

//change direction on key click
controls.forEach(b => b.addEventListener("click", () => changeDirection({ key: b.dataset.key })));

const initGame = ()=> {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`

    //snake eat food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPos();
        snakeBody.push([foodY, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;

        localStorage.setItem("high-score", highScore);
        scoreDisplay.innerText = `Score : ${score}`;
        highScoreDisplay.innerText = `High score : ${highScore}`;
    }

    //Update snake
    snakeX += speedX;
    snakeY += speedY;

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    //check if snake head is out of wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    //Add div to display snake
    for (let i = 0; i < snakeBody.length; i++) {
        html += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        //check if head hits body
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

updateFoodPos();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);