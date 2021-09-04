function doSomething() {
  console.log("I doing coding(javaScript).");
}

// 1 Second (s)	=	1,000 Millisecond (ms)
// 1 s = 1,000 ms
// 1 ms = 0.001000 s

console.log("First:I am the First.");
console.log("Second:I am the Second.");
console.log("Third:I am the Third.");
// setTimeout(doSomething, 5000);
setTimeout(function () {
  console.log("I am using VS code.");
}, 5000);
setTimeout(function () {
  console.log("Exploring MDN articles.");
}, 4000);
console.log("Fourth:I am the Fourth.");
