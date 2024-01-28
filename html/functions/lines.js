import { putArrayOfPixels } from "./utils.js";

const dotGap = 5;
export function slopeFn(x0, y0, x1, y1) {
  return (y1 - y0) / (x1 - x0);
}
export function bresenhamLine2(x0p, y0p, x1p, y1p) {
  const pixels = [];

  const dx = x1p - x0p;
  const dy = y1p - y0p;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  let x = x0p;
  let y = y0p;
  pixels.push({ x, y });
  if (absDx > absDy) {
    let d = 2 * absDy - absDx;
    for (let i = 0; i < absDx; i++) {
      x = dx < 0 ? x - 1 : x + 1;
      if (d < 0) {
        d = d + 2 * absDy;
      } else {
        y = dy < 0 ? y - 1 : y + 1;
        d = d + (2 * absDy - 2 * absDx);
      }
      pixels.push({ x, y });
    }
  } else {
    let d = 2 * absDx - absDy;
    for (let i = 0; i < absDy; i++) {
      y = dy < 0 ? y - 1 : y + 1;
      if (d < 0) d = d + 2 * absDx;
      else {
        x = dx < 0 ? x - 1 : x + 1;
        d = d + 2 * absDx - 2 * absDy;
      }
      pixels.push({ x, y });
    }
  }
  putArrayOfPixels(pixels);
  return pixels;
}
export function bresenhamLine(x0p, y0p, x1p, y1p, slopeP) {
  const pixels = [];
  const slope = slopeP || (y1p - y0p) / (x1p - x0p);
  console.log(slope);
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

export const bresenhamLineAllSlope = (x0, y0, x1, y1,slope ,isDot = false) => {
  console.log(isDot);
  const pixels = [];
  let dx = Math.abs(x1 - x0);
  let dy = Math.abs(y1 - y0);
  let x = x0;
  let y = y0;
  let signX = x1 - x0 > 0 ? 1 : -1;
  let signY = y1 - y0 > 0 ? 1 : -1;
  let isBaseY = false;
  if (dy > dx) {
    let temp = dx;
    dx = dy;
    dy = temp;
    isBaseY = true;
  }
  let d = 2 * dy - dx;
  for (let i = 1; i <= dx; isDot?i=i+dotGap:i=i+1) {
    pixels.push({x,y})
    while (d > 0) {
      if (isBaseY) {
        x = x + signX;
      } else {
        y = y + signY*(isDot?dotGap:1);
      }
      d = d - 2 * dx;
    }
    if (isBaseY) {
      y = y + signY;
    } else {
      x = x + signX;
    }
    d = d + 2 * dy;
  }
  putArrayOfPixels(pixels);
  return pixels;
};

export function axisParallelLine(x0, y0, x1, y1, isDot = false) {
  const pixels = [];
  if (x0 === x1) {
    while (y0 !== y1) {
      if (isDot && (Math.abs(y0) % dotGap === 0)) pixels.push({ x: x0, y: y0 });
      if (!isDot) pixels.push({ x: x0, y: y0 });
      y0 += y0 < y1 ? 1 : -1;
    }
  } else if (y0 === y1) {
    while (x0 !== x1) {
      if (isDot && (Math.abs(x0) % dotGap === 0)) pixels.push({ x: x0, y: y0 });
      if (!isDot)pixels.push({ x: x0, y: y0 });
      x0 += x0 < x1 ? 1 : -1;
    }
  }
  putArrayOfPixels(pixels);
  return pixels;
}

export function degreeLine45(x0, y0, x1, y1,isDot=false) {
  const pixels = [];

  const xInc = x0 < x1 ? 1 : -1;
  const yInc = y0 < y1 ? 1 : -1;

  while (x0 !== x1 && y0 !== y1) {
    if (isDot && (Math.abs(x0) % dotGap === 0)) pixels.push({ x: x0, y: y0 });
    if (!isDot)pixels.push({ x: x0, y: y0 });
    x0 += xInc;
    y0 += yInc;
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
  for (let i = 0; i < step; i++) {
    pixels.push({ x: Math.round(x), y: Math.round(y) });
    x += xInc;
    y += yInc;
  }
  putArrayOfPixels(pixels);
  return pixels;
}

export function linePointSwap(x0p, y0p, x1p, y1p, slopeT) {
  const slope = slopeT || slopeFn(x0p, y0p, x1p, y1p);

  if (Math.abs(slope) < 1 && x0p > x1p) {
    return { x0: x1p, y0: y1p, x1: x0p, y1: y0p };
  }
  if (Math.abs(slope) > 1 && y0p > y1p) {
    return { x0: x1p, y0: y1p, x1: x0p, y1: y0p };
  }
  if (slope < 0 && x0p > x1p) {
    return { x0: x1p, y0: y1p, x1: x0p, y1: y0p };
  }
  if (slope > 0 && x0p > x1p) {
    return { x0: x1p, y0: y1p, x1: x0p, y1: y0p };
  }

  return { x0: x0p, y0: y0p, x1: x1p, y1: y1p };
}

export function drawLine(x0p, y0p, x1p, y1p, isDot = false) {
  const slope = slopeFn(x0p, y0p, x1p, y1p);
  const { x0, y0, x1, y1 } = linePointSwap(x0p, y0p, x1p, y1p, slope);

  if (x0 === x1 || y0 === y1) {
    return axisParallelLine(x0, y0, x1, y1, isDot);
  }

  if (slope === 1 || slope === -1) {
    return degreeLine45(x0, y0, x1, y1,isDot);
  }

  return bresenhamLineAllSlope(x0, y0, x1, y1, slope, isDot);
}
