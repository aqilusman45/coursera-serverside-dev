//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
module.exports.rectPromise = (x, y) => {
    return new Promise(function(resolve, reject) {
      if (x <= 0 || y <= 0) {
        setTimeout(() => {
            reject(new Error("Invalid Dimensions"));
        }, 2000);
      } else {
        setTimeout(() => {
            resolve({
                area: (x, y) => {
                  return x * y;
                },
                peri: (x, y) => {
                  return 2 * (x + y);
                }
              });
        }, 2000);
      }
    });
  };
  