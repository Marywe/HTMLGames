const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 150, y: 150 }, { x: 140, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 }];
let dx = 10;
let dy = 0;
let food = { x: 200, y: 200 };
let punctuation = 0;


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i === 0) ? 'green' : 'mediumseagreen';
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);

    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(snake[i].x, snake[i].y, 10, 10);
  }

  ctx.fillStyle = 'lightcoral';
    ctx.fillRect(food.x, food.y, 10, 10);
  
    if (snake[0].x === food.x && snake[0].y === food.y) 
    {
        food = {
          x: Math.floor(Math.random() * 39) * 10,
          y: Math.floor(Math.random() * 39) * 10
        };
    
        ctx.font = '48px serif';
        ctx.fillStyle = 'red';
        ctx.fillText('Yum!', 150, 75);

        punctuation += 50;
    } 
    else {snake.pop();}

  let newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
  if (newHead.x < 0 || newHead.x > canvas.width - 10 || newHead.y < 0 || newHead.y > canvas.height - 10) {
    alert('Game Over');
  }
  for (let i = 1; i < snake.length; i++) {
    if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
      alert('Game Over');
    }
}
  snake.unshift(newHead);

    ctx.font = '32px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(punctuation, 200, 375);
}

function main() {
  setInterval(draw, 100);
}

document.addEventListener('keydown', function(event) {
    if ((event.code === 'ArrowLeft' || event.code === 'KeyA') && dx === 0) {
      dx = -10;
      dy = 0;
    } else if ((event.code === 'ArrowUp'|| event.code === 'KeyW') && dy === 0) {
      dx = 0;
      dy = -10;
    } else if ((event.code === 'ArrowRight'|| event.code === 'KeyD') && dx === 0) {
      dx = 10;
      dy = 0;
    } else if ((event.code === 'ArrowDown'|| event.code === 'KeyS') && dy === 0) {
      dx = 0;
      dy = 10;
    }
  });

main();
