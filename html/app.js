import { bresenhamCircle, midPointCircle } from "./functions/circles.js";
import {
  axisParallelLine,
  bresenhamLine,
  bresenhamLineAllSlope,
  ddaLine,
  degreeLine45,
  drawLine,
} from "./functions/lines.js";
import { ctx, putPixel } from "./functions/utils.js";


// drawLine(100, 100, 150, 400);

// drawLine(100, 100, 400, 100, true);

const cX = 100;
const cY = 100;
const unit = 100;
function lineUnit(x0, y0, x1, y1, isDot = false) {


  drawLine(x0*unit+cX,y0*unit+cY,x1*unit+cX,y1*unit+cY,isDot)
  
}

function circleUnit(x0, y0, r) {


  bresenhamCircle(x0*unit+cX,y0*unit+cY,r)
  
}



function shohidMinar() {


  lineUnit(2, 0, 17, 0)
  lineUnit(1, 1, 18, 1, true)
  lineUnit(0, 2, 19, 2)
  lineUnit(0, 2, 1, 1, true)
  lineUnit(18, 1, 19, 2, true)
  lineUnit(2, 0, 1, 1)
  lineUnit(17, 0, 18, 1)


  lineUnit(4, 2, 4, 11)
  lineUnit(6, 2, 6, 11)
  lineUnit(4, 11, 6, 11)

  lineUnit(15, 2, 15, 11)
  lineUnit(17, 2, 17, 11)
  lineUnit(15, 11, 17, 11)

  circleUnit(10, 7, 140)

  // bresenhamLineAllSlope(400,100,400,160)

  

  lineUnit(8, 11, 10, 13)
  lineUnit(10, 11, 12, 13)
  lineUnit(12, 11, 14, 13)
  lineUnit(10, 13, 14, 13)



  lineUnit(8, 2, 8, 5)
  lineUnit(8, 9, 8, 11)
  lineUnit(10, 2, 10, 4.2)
  lineUnit(10, 9.8, 10, 11)

  lineUnit(12, 2, 12, 5)
  lineUnit(12, 9, 12, 11)



    

}

// shohidMinar()


function draw2024() {
  
  lineUnit(0, 3, 1, 2.5, true)
  lineUnit(0, 2, 1, 2.5)
  lineUnit(0, 2, 1, 1.5, true)
  
  lineUnit(2, 1.5, 3, 1.5)
  lineUnit(2, 3, 3, 3)
  lineUnit(2, 3, 2, 1.5)
  lineUnit(3, 3, 3, 1.5)

  lineUnit(4, 3, 5, 2.5, true)
  lineUnit(4, 2, 5, 2.5)
  lineUnit(4, 2, 5, 1.5, true)

  lineUnit(6, 2.3, 6, 3.2)
  lineUnit(6, 2.3, 7, 2.3)
  lineUnit(6.8, 2.5, 6.8, 1.5)

}

draw2024()  