//Promises in Javascript ES6
// Request library does not support Promises
var asyncAdd=(a,b) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      if(typeof a=="number" && typeof b=="number")
      resolve(a+b);
      else {
        reject("Not a number");
      }
    }, 1500);
  });
};


var some=new Promise(function(resolve, reject) {
  setTimeout(function () {
      resolve("Working");
      reject("Unable to fulfill");
  }, 2500);
});

// some.then((msg) =>{
//   console.log("Success,",msg);
// },(err) =>{
//   console.log("Error",err);
// } );

// Chaining Promises
//This gives an error
// asyncAdd(5,"7").then((res) =>{
//   console.log("Result :",res);
//   return asyncAdd(res,10);
// },(msg) =>{
//   console.log(msg);
// }).then((res)=>{
//   console.log(res);
// },(msg)=>{
//   console.log("Error",msg);
// });


asyncAdd(5,7).then((res) =>{
  console.log("Result :",res);
  return asyncAdd(res,10);
}).then((res)=>{
  console.log(res);
}).catch((msg)=>{
  console.log("Error",msg);
});
