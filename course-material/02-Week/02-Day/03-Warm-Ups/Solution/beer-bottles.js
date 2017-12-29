// // super advanced input with function and check recursively
// // until user gets it right. This is here for you to try and push your
// // understanding of code! Any other commented code is here for the same reason.
// function getPositiveNumberFromUser(promptMessage, errorMessage) {
//   var numberString = prompt(promptMessage);
//   var number = parseInt(numberString);
//   if (isNaN(number) || number <= 0) {
//     alert(errorMessage);
//     return getPositiveNumberFromUser(promptMessage, errorMessage);
//   }
//   return number;
// }
// var askForBeer = 'Please enter the number of beer bottles you own.';
// var wrongBeerCount = 'Incorrect input, please enter a positive whole number with no commas';
// var beerAmount = getPositiveNumberFromUser(askForBeer, wrongBeerCount)

// less advanced input (what we would expect)
var numberString = prompt('Please enter the number of beer bottles you own.');
var beerAmount = parseInt(numberString);

//first solution:
//from 0 to beer count
if (beerAmount < 0) {
  console.log('how do you have negative beers???');
}
for(var i = 0; i <= beerAmount; i++) {
  console.log(i + ' bottles of beer on the wall.');
}

// bonus:
// // less code in for loop (more efficient, but less elegant):
// if (beerAmount < 0) {
//   console.log('how do you have negative beers???');
// } else if (beerAmount === 0) {
//   console.log('0 bottles of beer on the wall.');
// } else {
//   console.log('0 bottles of beer on the wall.');
//   console.log('1 bottle of beer on the wall.');
//   for(var j = 2; j <= beerAmount; j++) {
//     console.log(j + ' bottles of beer on the wall.');
//   }
// }

// // simple solution to bonus
if (beerAmount < 0) {
  console.log('how do you have negative beers???');
}
for(var j = 0; j <= beerAmount; j++) {
  if (j === 1) { //doing this check every iteration for only one entry is inefficient
    console.log(j + ' bottle of beer on the wall.');
  } else {
    console.log(j + ' bottles of beer on the wall.');
  }
}

// bonus bonus:
if (beerAmount <= 0) {
  console.log('We cannot sing the song without at least one beer on the wall!');
}
for (var k = beerAmount; k > 0; k--) {
  console.log(k + ' bottles of beer on the wall, ' + k + ' bottles of beer, take one down pass it around ' + (k - 1) + ' bottles of beer on the wall.');
}

// bonus bonus bonus:
// // less code in for loop (more efficient, but less elegant):
// if (beerAmount <= 0) {
//   console.log('We cannot sing the song without at least one beer on the wall!');
// } else if (beerAmount === 1) {
//   console.log('1 bottle of beer on the wall, 1 bottle of beer, take one down pass it around 0 bottles of beer on the wall.');
// } else {
//   for(var m = beerAmount; m > 2; m--) {
//     console.log(m + ' bottles of beer on the wall, ' + m + ' bottles of beer, take one down pass it around ' + (m - 1) + ' bottles of beer on the wall.');
//   }
//   console.log('2 bottles of beer on the wall, 2 bottles of beer, take one down pass it around 1 bottle of beer on the wall.');
//   console.log('1 bottle of beer on the wall, 1 bottle of beer, take one down pass it around 0 bottles of beer on the wall.');
// }

// simple solution
if (beerAmount <= 0) {
  console.log('We cannot sing the song without at least one beer on the wall!');
}
for (var m = beerAmount; m > 0; m--) {
  var mNext = m - 1;
  if (m === 1) { //doing this check every iteration for only two entries is inefficient
    console.log(m + ' bottle of beer on the wall, ' + m + ' bottle of beer, take one down pass it around ' + mNext + ' bottles of beer on the wall.');
  } else if (mNext === 1) {
    console.log(m + ' bottles of beer on the wall, ' + m + ' bottles of beer, take one down pass it around ' + mNext + ' bottle of beer on the wall.');
  } else {
    console.log(m + ' bottles of beer on the wall, ' + m + ' bottles of beer, take one down pass it around ' + mNext + ' bottles of beer on the wall.');
  }
}
