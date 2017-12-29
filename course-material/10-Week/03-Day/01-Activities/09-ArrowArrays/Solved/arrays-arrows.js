const princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

const name = "Rapunzel";
const age = 18;
const princesses = [
  { name, age },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));
princesses.forEach(({name, age}) => console.log(`${name}: ${age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
const names = princesses.map(princess => princess.name);
const names = princesses.map(({name}) => name);
console.log("names: ", names);

// using the `names` array, get only those names that start with an 'M'
// filter: creates a new array with elements that pass the test of the provided function
const mNames = names.filter(name => name.startsWith("M"));
console.log("m-names: ", mNames);

// get a single value from the data: the average age of all of the princesses
// map: applies a function against an "accumulator" and each element in the array (from left to right) to reduce it to a single value.
const sum = princesses.reduce((sum, princess) => sum + princess.age, 0);
const sum = princesses.reduce((sum, {age}) => sum + age, 0);
const average = sum / princesses.length;
const {length} = princesses;
const average = sum / length;
console.log("average age: ", average);

// BONUS: get the average age of all princesses whose name includes an 'l'
const lNames = princesses.filter(princess => princess.name.includes("l"));
const lNames = princesses.filter({name} => name.includes("l"));

const lSum = lNames.reduce((sum, princess) => sum + princess.age, 0);
const lSum = lNames.reduce((sum, {age}) => sum + age, 0);

const lAverage = lSum / lNames.length;
const {lLength} = lNames;
const lAverage = lSum / lLength;

console.log("l-average: ", lAverage);
