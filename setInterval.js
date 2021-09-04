/* console.log("First");
setInterval(() => {
  console.log("Tik Tik Tik");
}, 1000); //to stop in the terminal use Ctrl+C
console.log("Second");
 */
let seconds = 0;
const timeId = setInterval(() => {
  seconds++;
  console.log(seconds);
  if (seconds > 20) {
    clearInterval(timeId);
  }
}, 1000);

//to stop in the terminal use Ctrl+C
