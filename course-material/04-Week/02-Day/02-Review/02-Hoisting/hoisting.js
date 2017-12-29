//HOISTING EXAMPLE:
//Why we should define variables at top of file
//or top of functions to avoid unintended consequences
//or use let inside of for loops/if statements
for (var i = 0; i < 1; i++) {
  var apples = "apples";
}
console.log("apples", apples);
for (var i = 0; i < 1; i++) {
  let candy = "candy";
}
//comment out this line to continue
console.log("candy", candy);
if (true) {
  var i = 0;
}
console.log("i", i);
if (true) {
  let j = 0;
}
//comment out this line to continue
console.log("j", j);
//the next two do the same thing
//using let here shows we might not know what let means
function test() {
  var a = 0;
}
test();
//comment out this line to continue
console.log("a", a);
function test2() {
  let b = 0;
}
test2();
//comment out this line to continue
console.log("b", b);
