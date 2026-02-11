const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const playerWidth = 80;
const playerHeight = 100;
let playerX = 400;
let playerY = 300;
let playerSpeed = 5;
let playerStart = { x: 400, y: 300 };
const playerImage = new Image();
playerImage.src = "Imagesgame/potato.png";
playerImage.onload = () => {
    update();
};

let buttonWDown = false;
let buttonADown = false;
let buttonSDown = false;
let buttonDDown = false;
let buttonA_WDown = false;
let buttonD_Wown = false;
let buttonA_SDown = false;
let buttonA_own = false;
let buttonRESETDown = false;

addEventListener("keydown", (event) => {

if (event.key === "w")
    buttonWDown = true;
    if (event.key === "a")
    buttonADown = true;
    if (event.key === "s")
    buttonSDown = true;
    if (event.key === "d")
    buttonDDown = true;
if (event.key === "r")
    buttonRESETDown = true;
});

addEventListener("keyup", (event) => {
    if (event.key === "w")
    buttonWDown = false;
    if (event.key === "a")
    buttonADown = false;
    if (event.key === "s")
    buttonSDown = false;
    if (event.key === "d")
    buttonDDown = false;
if (event.key === "r")
    buttonRESETDown = false;

});
function update()
{  
    if (buttonRESETDown){
    playerX = playerStart.x;
    playerY = playerStart.y;
    }
    if (buttonWDown)
        playerY -= playerSpeed;
    if (buttonADown)
        playerX -= playerSpeed;
    if (buttonSDown)
        playerY += playerSpeed;
    if (buttonDDown)
        playerX += playerSpeed;
   
 
if (playerX + playerWidth / 2 >= canvas.width) {
    playerX = canvas.width - playerWidth / 2;
}


if (playerX - playerWidth / 2 <= 0) {
    playerX = playerWidth / 2;
}


if (playerY + playerHeight / 2 >= canvas.height) {
    playerY = canvas.height - playerHeight / 2;
}


if (playerY - playerHeight / 2 <= 0) {
    playerY = playerHeight / 2;
}
context.clearRect(0,0,canvas.width,canvas.height)
context.drawImage(
    playerImage,
    playerX - playerWidth / 2,
    playerY - playerHeight / 2,
    playerWidth,
    playerHeight
    );

    requestAnimationFrame(update);

}

