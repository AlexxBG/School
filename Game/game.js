const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

canvas.width  = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

let timeLast  = 0 ;
const targetFPS = 120;
const playerWidth = 80;
const playerHeight = 100;
let playerStart = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

let playerX = playerStart.x;
let playerY = playerStart.y;

let playerSpeed = 5;

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
let buttonD_SDown = false;
let buttonResetDown = false;
//let buttonShiftDown = false;

addEventListener("keydown", (event) => {
 const key = event.key.toLowerCase();
if (event.key === "w" || event.key === "в"  || event.key === "у")
    buttonWDown = true;
    if (event.key === "a" || event.key === "а"  || event.key === "ь")
    buttonADown = true;
    if (event.key === "s" || event.key === "с"  || event.key === "я")
    buttonSDown = true;
    if (event.key === "d" || event.key === "д"  || event.key === "а")
    buttonDDown = true;
    if (event.key === "r" || event.key === "р"  || event.key === "и")
    buttonResetDown = true;
   // if (event.key === "ShiftLeft")
   // buttonShiftDown = true;

});

addEventListener("keyup", (event) => {
   
    if (event.key === "w" || event.key === "в"  || event.key === "у")
    buttonWDown = false;
    if (event.key === "a" || event.key === "а"  || event.key === "ь")
    buttonADown = false;
    if (event.key === "s" || event.key === "с"  || event.key === "я")
    buttonSDown = false;
    if (event.key === "d" || event.key === "д" || event.key === "а")
    buttonDDown = false;
    if (event.key === "r" || event.key === "р" || event.key === "и")
    buttonResetDown = false;
   // if (event.key === "ShiftLeft")
   // buttonShiftDown = false;

});
function update(timeCurrent)
{  
    const deltaTime = timeCurrent - timeLast;
    const singleFrameTime = 1000/ targetFPS;
    if (deltaTime < singleFrameTime){
        console.log("delaying")
        return
    }
    console.log(deltaTime)
    
if (buttonResetDown){
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
    //if(buttonShiftDown)
    //    playerSpeed += 5
   
 
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
timeLast = timeCurrent;
//8.3
    requestAnimationFrame(update);

}
requestAnimationFrame(update);


