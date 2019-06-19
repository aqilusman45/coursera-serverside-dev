const { rect } = require('./rectangle');
const { rectPromise } = require('./promiseRectangle');



function solveRect(l,b) {
console.log(`Solving for rectangle l = ${l} and b = ${b} (HOC)`);

rect(l, b, (err, rectangle)=>{
    if (err) {
        console.log(err.message);
    }else{
        console.log(`Area: ${rectangle.area(l,b)}`);
        console.log(`Perimeter: ${rectangle.peri(l,b)}`);        
    }
})

}

//Using Higher Order Function
solveRect(2,3)
solveRect(0, 2);

//Using promise
function solveRectPromise(l, b) {
    console.log(`Solving for rectangle l = ${l} and b = ${b} (Promise)`);
    rectPromise(l,b)
    .then((res)=>{
        console.log(`Area: ${res.area(l,b)}`);
        console.log(`Perimeter: ${res.peri(l,b)}`);
    })
    .catch((rej)=>{
        console.log(rej.message);
    })
}


solveRectPromise(21, 42);
solveRectPromise(-21,32);

