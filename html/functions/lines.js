import { putArrayOfPixels } from "./utils.js";

export function slopeFn(x0, y0, x1, y1) {
  return (y1 - y0) / (x1 - x0);
}
export function bresenhamLine(x0p, y0p, x1p, y1p, slopeP) {
  const pixels = [];
  const slope = slopeP || (y1p - y0p) / (x1p - x0p);
  let x0 = x0p;
  let y0 = y0p;
  let x1 = x1p;
  let y1 = y1p;
  if (slope > 1) {
    x0 = y0p;
    y0 = x0p;
    x1 = y1p;
    y1 = x1p;
  }

  let x = x0;
  let y = y0;
  let dx = x1 - x0;
  let dy = y1 - y0;
  let dT = 2 * (dy - dx);
  let dS = 2 * dy;
  let d = 2 * dy - dx;
  pixels.push({ x, y });
  while (x < x1) {
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

export function axisParallelLine(x0, y0, x1, y1) {
  const pixels = [];
  if (x0 === x1) {
    while (y0 !== y1) {
      pixels.push({ x: x0, y: y0 });
      y0 += y0 < y1 ? 1 : -1;
    }
  } else if (y0 === y1) {
    while (x0 !== x1) {
      pixels.push({ x: x0, y: y0 });
      x0 += x0 < x1 ? 1 : -1;
    }
  }
  putArrayOfPixels(pixels);
  return pixels;
}

export function degreeLine45(x0, y0, x1, y1) {
  const pixels = [];

  while (x0 !== x1 && y0 !== y1) {
    pixels.push({ x: x0, y: y0 });
    x0 += x0 < x1 ? 1 : -1;
    y0 += y0 < y1 ? 1 : -1;
  }
  putArrayOfPixels(pixels);
  return pixels;
}

export function ddaLine(x0, y0, x1, y1) {
  const pixels = [];
  const dx = x1 - x0;
  const dy = y1 - y0;
  const step = Math.max(Math.abs(dx), Math.abs(dy));
  const xInc = dx / step;
  const yInc = dy / step;
  let x = x0;
  let y = y0;
  pixels.push({ x, y });
  for (let i = 0; i < step; i++) {
    x += xInc;
    y += yInc;

    pixels.push({ x: Math.round(x), y: Math.round(y) });
  }
  putArrayOfPixels(pixels);
  return pixels;
}

export function drawLine(x0p, y0p, x1p, y1p) {
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
