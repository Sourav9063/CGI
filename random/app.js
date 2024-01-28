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



// degreeLine45(10, 90, 90, 10);
// drawLine(1000, 300, 300, 3);

function drawSWE() {
  // axisParallelLine(10, 10, 110, 10);
  // axisParallelLine(10, 10, 10, 110);
  // axisParallelLine(10, 110, 110, 110);
  // axisParallelLine(110, 110, 110, 210);
  // axisParallelLine(110, 210, 10, 210);
  // degreeLine45(210, 10, 410, 210);
}

drawSWE();

// bresenhamCircle(100, 100, 50, {
//   first: true,
//   second: true,
//   third: true,
//   fourth: true,
// });

// midPointCircle(200, 100, 50, {
//   first: true,
//   second: true,
//   third: true,
//   fourth: true,
// });

// bresenhamLine(0, 0, 162, 8);

function drawS() {
  drawLine(100, 100, 100, 200);
  drawLine(150, 100, 150, 200);
  drawLine(200, 100, 200, 200);
  drawLine(250, 100, 250, 200);
  drawLine(100, 300, 150, 200);
  drawLine(150, 300, 200, 200);
  drawLine(200, 300, 250, 200);
  bresenhamCircle(175, 100, 25, {
    first: false,
    second: false,
    third: true,
    fourth: true,
  });
  bresenhamCircle(175, 100, 75, {
    first: false,
    second: false,
    third: true,
    fourth: true,
  });
  drawLine(100, 400, 100, 300);
  drawLine(150, 400, 150, 300);
  drawLine(200, 400, 200, 300);
  drawLine(250, 400, 250, 300);
  bresenhamCircle(175, 400, 25, {
    first: true,
    second: true,
    third: false,
    fourth: false,
  });
  bresenhamCircle(175, 400, 75, {
    first: true,
    second: true,
    third: false,
    fourth: false,
  });

  drawLine(100, 200, 150, 200);
  drawLine(200, 300, 250, 300);
}

drawS();

function test() {
  const circle = bresenhamCircle(800, 400, 400);
  for (const circlePixel of circle) {
    drawLine(800, 400, circlePixel.x, circlePixel.y);
  }
}
// test();
