const c = document.getElementById("canvas");
export const ctx = c.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

export function putPixel(x, y, thickness = 1) {
  ctx.fillRect(x, y, thickness, thickness);
}

export function putArrayOfPixels(pixels) {
  pixels.forEach((pixel) => {
    putPixel(pixel.x, pixel.y);
  });
}

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
