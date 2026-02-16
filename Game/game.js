const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;
const targetFPS = 120;
const frameInterval = 1000 / targetFPS;

let timeLast = 0;
//bullet

let bulletX = 200
let bulletY =100
//enemy
const enemyWidth = 80;
const enemyHeight = 100;

let enemyStart = {
    x: 600,
    y: 400
};

let enemyX = enemyStart.x;
let enemyY = enemyStart.y;
let enemeySpeed = 300

const enemyImage = new Image();
enemyImage.src = "Imagesgame/fryer.png"

//player

const playerWidth = 80;
const playerHeight = 100;

let playerStart = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

let playerX = playerStart.x;
let playerY = playerStart.y;

const playerSpeed = 300;

const playerImage = new Image();
playerImage.src = "Imagesgame/potato.png";

let buttonWDown = false;
let buttonADown = false;
let buttonSDown = false;
let buttonDDown = false;
let buttonResetDown = false;
let buttonSpaceDown = false;
let bulletRequired = false;
addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "w" || key === "в") buttonWDown = true;
    if (key === "a" || key === "а") buttonADown = true;
    if (key === "s" || key === "с") buttonSDown = true;
    if (key === "d" || key === "д") buttonDDown = true;
    if (key === "r" || key === "р") buttonResetDown = true;
    if (key === " ") buttonSpaceDown = true;
});

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();

    if (key === "w" || key === "в") buttonWDown = false;
    if (key === "a" || key === "а") buttonADown = false;
    if (key === "s" || key === "с") buttonSDown = false;
    if (key === "d" || key === "д") buttonDDown = false;
    if (key === "r" || key === "р") buttonResetDown = false;
  if (key === " ") buttonSpaceDown = false;
});

function update(timeCurrent) {

    if (!timeLast) timeLast = timeCurrent;

    const deltaTime = timeCurrent - timeLast;

    if (deltaTime < frameInterval) {
        requestAnimationFrame(update);
        return;
    }

    timeLast = timeCurrent - (deltaTime % frameInterval);

    const deltaSeconds = deltaTime / 1000;


    if(buttonSpaceDown)
        bulletRequired= true; 

    if (buttonResetDown) {
        playerX = playerStart.x;
        playerY = playerStart.y;
    }

    if (buttonWDown) playerY -= playerSpeed * deltaSeconds;
    if (buttonADown) playerX -= playerSpeed * deltaSeconds;
    if (buttonSDown) playerY += playerSpeed * deltaSeconds;
    if (buttonDDown) playerX += playerSpeed * deltaSeconds;

    if (playerX + playerWidth / 2 > canvas.width)
        playerX = canvas.width - playerWidth / 2;

    if (playerX - playerWidth / 2 < 0)
        playerX = playerWidth / 2;

    if (playerY + playerHeight / 2 > canvas.height)
        playerY = canvas.height - playerHeight / 2;

    if (playerY - playerHeight / 2 < 0)
        playerY = playerHeight / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    if(bulletRequired)
    {
        console.log ("Pew");
        context.fillStyle = "green";
        const bullet = new Path2D();
        bullet.arc(75, 75, 30, 0,  Math.PI * 2);
        context.fill(bullet);
    }

    context.drawImage(
        playerImage,
        playerX - playerWidth / 2,
        playerY - playerHeight / 2,
        playerWidth,
        playerHeight





    );


context.drawImage(
        enemyImage,
        enemyX - enemyWidth / 2,
        enemyY - enemyHeight / 2,
        enemyWidth,
        enemyHeight
    );


    requestAnimationFrame(update);
}

playerImage.onload = () => {
    requestAnimationFrame(update);

};

enemyImage.onload = () => {
    requestAnimationFrame(update);
};

