import { putArrayOfPixels } from "./utils.js";

export function bresenhamCircle(
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

export function midPointCircle(
  x0,
  y0,
  radius,
  circleHalves = { first: true, second: true, third: true, fourth: true }
) {
  const pixels = [];
  let x = 0;
  let y = radius;
  let p = 1 - radius;
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
