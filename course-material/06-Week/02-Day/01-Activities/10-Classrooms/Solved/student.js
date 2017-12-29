// constructor function for creating student objects
function Student(name, favoriteSub, gpa) {
  this.name = name;
  this.favoriteSub = favoriteSub;
  this.gpa = gpa;
};

// exporting our Student constructor
//example 1:
//exports = what require returns
module.exports = Student;
//example 2:
//exports.student = Student;
