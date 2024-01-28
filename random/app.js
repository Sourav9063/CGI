function test() {
  const circle = bresenhamCircle(800, 400, 400);
  for (const circlePixel of circle) {
    bresenhamLineAllSlope(800, 400, circlePixel.x, circlePixel.y);
  }
}

// test();

// function random() {
//   for (let i = 0; i < 100000; i++) {
//     const randomX = Math.floor(Math.random() * 800);
//     const randomY = Math.floor(Math.random() * 800);
//     putPixel(randomX, randomY, 2);
//   }
// }

// random();

// setInterval(() => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   random();
// }, 2000);
