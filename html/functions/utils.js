const c = document.getElementById("canvas");
export const ctx = c.getContext("2d");
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

export function putPixel(x, y) {
  ctx.fillRect(x, y, 1, 1);
}

export function putArrayOfPixels(pixels) {
  pixels.forEach((pixel) => {
    putPixel(pixel.x, pixel.y);
  });
}
