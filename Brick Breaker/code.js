const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions to match the dimensions of the browser window
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;

// Create the bricks
const brickRowCount = 9;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// Create the paddle
const paddleHeight = 10;
const paddleWidth = 100;
let paddleX = (canvas.width - paddleWidth) / 2;

// Create the ball
const ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height - 30;
let dx = 1;
let dy = -1;
let paddleVel = 4;

// Draw the bricks
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// Draw the paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = 'darkorchid';
    ctx.fill();
    ctx.closePath();
  }
  
  // Draw the ball
  function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'blueviolet';
    ctx.fill();
    ctx.closePath();
  }
  

  // Draw the game
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the bricks
    drawBricks();
    
    // Draw the paddle
    drawPaddle();
    
    // Draw the ball
    drawBall();
    
    // Collision detection for the ball and bricks
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const b = bricks[c][r];
        if (b.status === 1) {
          if (ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) {
            dy = -dy;
            b.status = 0;
          }
        }
      }
    }
     // Collision detection for the ball and walls
  if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius) {
    dx = -dx;
  }
  if (ballY + dy < ballRadius) {
    dy = -dy;
  } else if (ballY + dy > canvas.height - ballRadius) {
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("Game over");
      document.location.reload();
    }
  }
  
  // Move the ball
  ballX += dx;
  ballY += dy;
  
  // Move the paddle
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += paddleVel;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= paddleVel;
  }
}

// Set up the game loop
setInterval(draw);

// Set up the keyboard controls
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft"|| e.key === "a" || e.key === "A") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft"|| e.key === "a" || e.key === "A") {
      leftPressed = false;
    }
  }