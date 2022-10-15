//Classes decoration

class Car {
  constructor(make, model, year) {
    ;(this.make = make), (this.model = model), (this.year = year)
  }
  print() {
    console.log(`${this.make}, ${this.model}, ${this.year}`)
  }
}

const myCar = new Car('Audi', 'M443', 2009)
console.log(myCar) //Show an Object
myCar.print() //Show String values

class SportsCar extends Car {
  atherMethod() {
    console.log('Vrooom goes the', this.model)
  }
}

const mySportCar = new SportsCar('dodger', 'viper', 2001)
mySportCar.print()
mySportCar.atherMethod() //
