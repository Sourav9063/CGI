const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

function putPixel(x, y) {
  ctx.fillRect(x, y, 1, 1);
}

function putArrayOfPixels(pixels) {
  pixels.forEach((pixel) => {
    putPixel(pixel.x, pixel.y);
  });
}

function slopeFn(x0, y0, x1, y1) {
  return (y1 - y0) / (x1 - x0);
}

function bresenhamLine(x0, y0, x1, y1, slopeP) {
  const pixels = [];
  const slope = slopeP || (y1 - y0) / (x1 - x0);
  let x0t = x0;
  let y0t = y0;
  let x1t = x1;
  let y1t = y1;
  if (slope > 1) {
    x0t = y0;
    y0t = x0;
    x1t = y1;
    y1t = x1;
  }

  let x = x0t;
  let y = y0t;
  let dx = x1t - x0t;
  let dy = y1t - y0t;
  let dT = 2 * (dy - dx);
  let dS = 2 * dy;
  let d = 2 * dy - dx;
  putPixel(x0t, y0t);
  pixels.push({ x, y });
  while (x < x1t) {
    x++;
    if (d < 0) {
      d += dS;
    } else {
      y++;
      d += dT;
    }
    if (slope > 1) {
      pixels.push({ x: y, y: x });
    } else {
      pixels.push({ x, y });
    }
  }

  putArrayOfPixels(pixels);

  return pixels;
}

function axisParallelLine(x0, y0, x1, y1) {
  const pixels = [];
  if (x0 === x1) {
    while (y0 !== y1) {
      putPixel(x0, y0);
      pixels.push({ x: x0, y: y0 });
      y0 += y0 < y1 ? 1 : -1;
    }
  } else if (y0 === y1) {
    while (x0 !== x1) {
      putPixel(x0, y0);
      pixels.push({ x: x0, y: y0 });
      x0 += x0 < x1 ? 1 : -1;
    }
  }
  return pixels;
}

function degreeLine45(x0, y0, x1, y1) {
  const pixels = [];

  while (x0 !== x1 && y0 !== y1) {
    putPixel(x0, y0);
    pixels.push({ x: x0, y: y0 });
    x0 += x0 < x1 ? 1 : -1;
    y0 += y0 < y1 ? 1 : -1;
  }
  return pixels;
}

function drawLine(x0p, y0p, x1p, y1p) {
  const x0 = x0p <= x1p ? x0p : x1p;
  const y0 = x0p <= x1p ? y0p : y1p;
  const x1 = x0p > x1p ? x0p : x1p;
  const y1 = x0p > x1p ? y0p : y1p;
  if (x0 === x1 || y0 === y1) {
    return axisParallelLine(x0, y0, x1, y1);
  }
  const slope = slopeFn(x0, y0, x1, y1);
  if (slope === 1 || slope === -1) {
    return degreeLine45(x0, y0, x1, y1);
  }

  return bresenhamLine(x0, y0, x1, y1, slope);
}

// axisParallelLine(10, 10, 90, 10);
// axisParallelLine(10, 10, 10, 70);
// degreeLine45(10, 10, 90, 70);
// degreeLine45(10, 90, 90, 10);
drawLine(1000, 300, 300, 3);

function bresenhamCircle(
  x0,
  y0,
  radius,
  circleHalves = { first: true, second: true, third: true, fourth: true }
) {
  let y = radius;
  let x = 0;
  let d = 3 - 2 * radius;
  const pixels = [];

  while (x <= y) {
    if (circleHalves.first) {
      pixels.push({ x: x + x0, y: y + y0 });
      pixels.push({ x: y + x0, y: x + y0 });
    }
    if (circleHalves.second) {
      pixels.push({ x: -x + x0, y: y + y0 });
      pixels.push({ x: -y + x0, y: x + y0 });
    }
    if (circleHalves.third) {
      pixels.push({ x: -x + x0, y: -y + y0 });
      pixels.push({ x: -y + x0, y: -x + y0 });
    }
    if (circleHalves.fourth) {
      pixels.push({ x: x + x0, y: -y + y0 });
      pixels.push({ x: y + x0, y: -x + y0 });
    }

    if (d < 0) {
      d = d + 4 * x + 6;
    } else {
      d = d + 4 * (x - y) + 10;
      y--;
    }
    x++;
  }

  putArrayOfPixels(pixels);
  return pixels;
}
function midPointCircle(
  x0,
  y0,
  radius,
  circleHalves = { first: true, second: true, third: true, fourth: true }
) {
  const pixels = [];
  let x = 0;
  let y = r;
  let p = 1 - r;
  while (x <= y) {
    if (circleHalves.first) {
      pixels.push({ x: x + x0, y: y + y0 });
      pixels.push({ x: y + x0, y: x + y0 });
    }
    if (circleHalves.second) {
      pixels.push({ x: -x + x0, y: y + y0 });
      pixels.push({ x: -y + x0, y: x + y0 });
    }
    if (circleHalves.third) {
      pixels.push({ x: -x + x0, y: -y + y0 });
      pixels.push({ x: -y + x0, y: -x + y0 });
    }
    if (circleHalves.fourth) {
      pixels.push({ x: x + x0, y: -y + y0 });
      pixels.push({ x: y + x0, y: -x + y0 });
    }

    if (p < 0) {
      p = p + 2 * x + 3;
    } else {
      p = p + 2 * (x - y) + 5;
      y--;
    }
    x++;
  }
  putArrayOfPixels(pixels);
  return pixels;
}

function drawSWE() {
  axisParallelLine(10, 10, 110, 10);
  axisParallelLine(10, 10, 10, 110);
  axisParallelLine(10, 110, 110, 110);
  axisParallelLine(110, 110, 110, 210);
  axisParallelLine(110, 210, 10, 210);
  degreeLine45(210, 10, 410, 210);
}

// drawSWE();

bresenhamCircle(100, 100, 50, {
  first: true,
  second: true,
  third: true,
  fourth: true,
});

bresenhamCircle(200, 100, 50, {
  first: true,
  second: true,
  third: true,
  fourth: true,
});
