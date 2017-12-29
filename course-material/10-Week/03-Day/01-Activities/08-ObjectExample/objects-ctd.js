// object shorthand syntax
const name = "Nick";
const age = 42;

// key names and values are computed from variable
//es5
const instructor = {
  name: name,
  age: age
}
//es6
const instructor = {
  name,
  age
};
console.log(instructor); // {name: "Nick", age: 42"}

// reassign variable name
//es5
var teacher = instructor.name;
//es6
const { name: teacher } = instructor;
console.log(teacher); // Nick

// default assignment
//es5
var course = instructor.course || "FullStack";
//es6
const { course = "FullStack" } = instructor;
console.log(course); // 'FullStack'

// function parameters can also use destructuring and default values!
//es5
function divide(a, b) {
  a = a || 4;
  b = b || 2;
  return a / b;
}
//es6
const divide = (a = 4, b = 2) => a / b;
console.log(divide()); // 2

//es5
function getName(person) {
  var firstName = person.name;
  return console.log(firstName);
}
//es6
const getName = ({ name: firstName }) => console.log(firstName);
getName(instructor); // Nick
