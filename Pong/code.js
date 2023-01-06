const game = document.getElementById('game');
const paddles = document.querySelectorAll('.paddle');
const ball = document.getElementById('ball');
let ballX = 50;
let ballY = 50;
let speedX = 1;
let speedY = 1;

function moveBall() {
  ballX += speedX;
  ballY += speedY;

  ball.style.top = ballY + 'px';
  ball.style.left = ballX + 'px';
}

function checkCollision() {
  if (ballX < 0 || ballX > game.offsetWidth) {
    speedX = -speedX;
  }
  if (ballY < 0 || ballY > game.offsetHeight) {
    speedY = -speedY;
  }
}

const keyDown = {
    a: false,
    z: false,
    k: false,
    m: false
  };
  
  // Add event listeners to track keydown and keyup events
  window.addEventListener('keydown', function(event) {
    if (event.key === 'w') keyDown.w = true;
    if (event.key === 's') keyDown.s = true;
    if (event.key === 'k') keyDown.k = true;
    if (event.key === 'm') keyDown.m = true;
  });
  
  window.addEventListener('keyup', function(event) {
    if (event.key === 'w') keyDown.w = false;
    if (event.key === 's') keyDown.s = false;
    if (event.key === 'k') keyDown.k = false;
    if (event.key === 'm') keyDown.m = false;
  });

  // Set the initial positions of the paddles
paddles[0].style.top = '0px';
paddles[1].style.top = '0px';

function movePaddles() {
    // Get the current positions of the paddles
    var paddleLeftY = parseInt(paddles[0].style.top);
    var paddleRightY = parseInt(paddles[1].style.top);
  
    if (keyDown.w) {
        // Move the left paddle up
        paddleLeftY = Math.max(0, paddleLeftY - 5);
        paddles[0].style.top = paddleLeftY + 'px';
      }
      if (keyDown.s) {
        // Move the left paddle down
        paddleLeftY = Math.min(game.offsetHeight - paddles[0].offsetHeight, paddleLeftY + 5);
        paddles[0].style.top = paddleLeftY + 'px';
      }
      if (keyDown.k) {
        // Move the right paddle up
        paddleRightY = Math.max(0, paddleRightY - 5);
        paddles[1].style.top = paddleRightY + 'px';
      }
      if (keyDown.m) {
        // Move the right paddle down
        paddleRightY = Math.min(game.offsetHeight - paddles[1].offsetHeight, paddleRightY + 5);
        paddles[1].style.top = paddleRightY + 'px';
      }
  }

function gameLoop() {
    moveBall();
    checkCollision();
    movePaddles();
    requestAnimationFrame(gameLoop);
  }
  
gameLoop();