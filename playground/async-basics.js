console.log("Starting App");

setTimeout(function () {
  console.log("Inside the callback function");
}, 2000);

setTimeout(() => {
  console.log("Second timeout works");
}, 0);

console.log("Fininshing Up");
