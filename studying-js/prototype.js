const orginalCar = {
  make: 'BMD',
  model: 'OD00',
  year: 2009
}

const newCar = Object.create(orginalCar)
//Change prototype
newCar.make = 'Audi'
console.log(newCar.make)
console.log(newCar.whatever)
console.log(Object.getPrototypeOf(newCar))

const newPrototype = Object.create(orginalCar)

orginalCar.doors = 4
console.log(newCar.doors)

console.log(orginalCar.hasOwnProperty('doors'))

console.log(newCar.hasOwnProperty('doors'))
