// axisParallelLine(10, 10, 90, 10);
// axisParallelLine(10, 10, 10, 70);
// degreeLine45(10, 10, 90, 70);

import { bresenhamCircle, midPointCircle } from "./functions/circles.js";
import {
  axisParallelLine,
  bresenhamLine,
  ddaLine,
  degreeLine45,
  drawLine,
} from "./functions/lines.js";

// degreeLine45(10, 90, 90, 10);
drawLine(1000, 300, 300, 3);

function drawSWE() {
  axisParallelLine(10, 10, 110, 10);
  axisParallelLine(10, 10, 10, 110);
  axisParallelLine(10, 110, 110, 110);
  axisParallelLine(110, 110, 110, 210);
  axisParallelLine(110, 210, 10, 210);
  degreeLine45(210, 10, 410, 210);
}

drawSWE();

bresenhamCircle(100, 100, 50, {
  first: true,
  second: true,
  third: true,
  fourth: true,
});

midPointCircle(200, 100, 50, {
  first: true,
  second: true,
  third: true,
  fourth: true,
});

bresenhamLine(0, 0, 162, 8);
