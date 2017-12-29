// convert the code below to use the array methods instead of for loops
// you'll need to use the filter, reduce, map, and forEach methods

const princesses = [{name: 'Rapunzel', age: 18}, {name: 'Mulan', age: 16},
  {name: 'Anna', age: 18}, {name: 'Moana', age: 16}];

// log the name of each princess, follow by a colon, followed by their age
// can be replaced with forEach
princesses.forEach(function (princess) {
  console.log(`${princess.name}: ${princess.age}`);
})


// create an array of princess names from the existing array
// can be replaced with map
let names = princesses.map(function (princess) {
  return princess.name;
});
console.log("names: ", names);


// using the `names` array, get only those names that start with an 'M'
// can be replaced with filter
let mNames = names.filter(function (princessName) {
  if (princessName.startsWith('M')) {
    return true;
  }
  return false;
});
console.log("m-names: ", mNames);


// get a single value from the data: the average age of all of the princesses
// Can be replaced with reduce
let sum = princesses.reduce(function(prev, princess) {
  return prev + princess.age;
}, 0);
const average = sum / princesses.length;
console.log("average age: ", average);


// BONUS: get the average age of all princesses whose name includes an 'l'
let lNames = princesses.filter(function (princess) {
  return princess.toLowerCase().indexOf('l') > -1;
});
let sum2 = lNames.reduce(function (prev, princess) {
  return prev + princess.age;
}, 0)
console.log("l-names: ", sum2 / lNames.length);
