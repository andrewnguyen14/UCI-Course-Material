var num = parseInt(process.argv[2]);
//type in terminal
//node interview.js 3
//or
//node interview.js 5
//etc.
function printTriangle(n) {
  // where n = 3
  // i will be 1, 2, 3
  for (var i = 1; i <= n; i++) {
    var outputLine = '';
    //NOTE - we want to print out i things each time
    // ex 3 console logs '+', '++', '+++'
    for (var j = 0; j < i; j++) {
      outputLine += '+';
    }
    console.log(outputLine);
  }
}

printTriangle(num);

function printTrianglePerformant(n) {
  // where n = 3
  // i will be 0, 1, 2
  var outputLine = '';
  for (var i = 0; i < n; i++) {
    //NOTE - we want to print out i things each time
    // ex 3 console logs '+', '++', '+++'
    outputLine += '+';
    console.log(outputLine);
  }
}

printTrianglePerformant(num);

function printReverse(n) {
  // where n = 3
  // i will be 1, 2, 3
  for (var i = 1; i <= n; i++) {
    var outputLine = '';
    //NOTE - we want to print out n things each time
    // ex 3 console logs '  +', ' ++', '+++'
    for (var j = 0; j < n; j++) {
      if (n - j >= i) {
        outputLine += ' ';
      } else {
        outputLine += '+';
      }
    }
    console.log(outputLine);
  }
}

printReverse(num);

function printReversePerformant(n) {
  // make n - 1 spaces string
  var spaces = Array(n).join(' ');
  var pluses = '+';
  while(spaces) {
    console.log(spaces + pluses);
    //remove last space
    spaces = spaces.slice(0, -1);
    //add another plus
    pluses += '+';
  }
}
printReversePerformant(num);
