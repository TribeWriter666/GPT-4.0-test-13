const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
let hue = 0;

function drawSquare(x, y, size, hue) {
  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.fillRect(x - size / 2, y - size / 2, size, size);
}

function hypnoticSquares(x, y, size, hue) {
  const numSquares = 6;
  const angleStep = (Math.PI * 2) / numSquares;

  for (let i = 0; i < numSquares; i++) {
    const angle = angleStep * i;
    const xOffset = Math.cos(angle + time) * size;
    const yOffset = Math.sin(angle + time) * size;

    drawSquare(x + xOffset, y + yOffset, size / 2, hue);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxSize = Math.min(canvas.width, canvas.height) / 4;

  const size = maxSize * (Math.sin(time) + 1) / 2;
  hypnoticSquares(centerX, centerY, size, hue);

  time += 0.02;
  hue += 0.5;

  requestAnimationFrame(animate);
}

animate();
