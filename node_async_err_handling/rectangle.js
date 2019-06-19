// // we use callback to handle async fucntions

module.exports.rect = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(() => {
      callback(new Error("Invalid Dimensions"), null);
    }, 2000);
  } else {
    setTimeout(() => {
      callback(null, {
        area: (x, y) => {
          return x * y;
        },
        peri: (x, y) => {
          return 2 * (x + y);
        }
      });
    }, 2000);
  }
};

//Wrong
// module.exports.rect = (x, y) => {
//   if (x <= 0 || y <= 0) {
//     setTimeout(() => {
//       return new Promise(null, () => {
//         return new Error("Invalid Dimensions");
//       });
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       return new Promise(() => {
//         return {
//           area: (x, y) => {
//             return x * y;
//           },
//           peri: (x, y) => {
//             return 2 * (x + y);
//           }
//         };
//       }, null);
//     }, 2000);
//   }
// };


//Wrong
// module.exports.rect = (x, y) => {
//    return new Promise(
//       (res => {
//         return res.solve =  {
//           area: (x, y) => {
//             return x * y;
//           },
//           peri: (x, y) => {
//             return 2 * (x + y);
//           }
//         };
//       },
//       rej => {
//         if (x <= 0 || y <= 0) {
//           return rej.error = new Error("Invalid Dimensions");
//         }
//       })
//     );
// };

//Correct
// module.exports.rect = (x, y) => {
//   return new Promise(function(resolve, reject) {
//     if (x <= 0 || y <= 0) {
//       reject(new Error("Invalid Dimensions"));
//     } else {
//       resolve({
//         area: (x, y) => {
//           return x * y;
//         },
//         peri: (x, y) => {
//           return 2 * (x + y);
//         }
//       });
//     }
//   });
// };
