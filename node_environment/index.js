//rectangle object

const {area, peri} = require('./rectangle')

// let rect = {
//     area: (x,y)=> x*y,
//     peri: (x,y)=> (2*(x+y))
// }

function solveRect(l,b) {
    console.log(`Solving for rectangle l = ${l} and b = ${b} `);
    if (l <=0 || b <= 0) {
        console.log("Invalid Dimensions");
    }else{
        // console.log(`Area of the rectangle is ${rect.area(l,b)}`);
        console.log(`Area of the rectangle is ${area(l,b)}`);
        
        // console.log(`Peri of the rectangle is ${rect.peri(l,b)}`);
        console.log(`Peri of the rectangle is ${peri(l,b)}`);
        
    }
}

solveRect(4,5);
solveRect(4,5);
solveRect(4,5);
