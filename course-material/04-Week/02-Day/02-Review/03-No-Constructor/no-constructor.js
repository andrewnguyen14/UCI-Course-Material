var car1 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2007
};

var car2 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2008
};

var car3 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2017
};

var car4 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2009
};

var car5 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2010
};

var car6 = {
  make: 'Toyota',
  modal: 'Prius',
  year: 2011
};

var car7 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2012
};

var car8 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2013
};

var car9 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2014
};

var car10 = {
  make: 'Toyota',
  model: 'Prius',
  year: 2015
};

var cars = [car1, car2, car3 ,car4, car5, car6, car7, car8, car9, car10];
for (var i = 0; i < cars.length; i++) {
  if (cars[i].model.charAt(0) === 'C') {
    console.log('Model starts with C');
  }
}
