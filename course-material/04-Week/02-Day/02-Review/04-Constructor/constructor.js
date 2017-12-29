function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.honk = function() {
    console.log(this.make, this.model, this.year, 'Honk Honk!');
  }
}

var car1 = new Car('Toyota', 'Prius', 2007);

var car2 = new Car('Toyota','Prius', 2008);

var car3 = new Car('Toyota','Prius', 2009);

var car4 = new Car('Toyota','Prius', 2010);

var car5 = new Car('Toyota','Prius', 2011);

var car6 = new Car('Toyota','Prius', 2012);

var car7 = new Car('Toyota','Prius', 2013);

var car8 = new Car('Toyota','Prius', 2014);

var car9 = new Car('Toyota','Prius', 2015);

var car10 = new Car('Toyota','Prius', 2016);

var cars = [car1, car2, car3 ,car4, car5, car6, car7, car8, car9, car10];
for (var i = 0; i < cars.length; i++) {
  if (cars[i].model.charAt(0) === 'P') {
    cars[i].honk();
  }
}
