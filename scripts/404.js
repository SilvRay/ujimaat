const follower = document.querySelector(".circle-image");

const MAX_X = 30; // vw
const MAX_Y = 30; // vh
const SMOOTHING = 0.02; // plus petit = plus smooth

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 â†’ 1
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  targetX = x * MAX_X;
  targetY = y * MAX_Y;
});

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function animate() {
  currentX = lerp(currentX, targetX, SMOOTHING);
  currentY = lerp(currentY, targetY, SMOOTHING);

  follower.style.transform = `
    translate3d(${currentX}vw, ${currentY}vh, 0)
  `;

  requestAnimationFrame(animate);
}

animate();
