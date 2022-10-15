// Oject car
/*
const car = {
  make: 'BMW',
  model: '9504i',
  year: 2010,
  price: function () {
    return 5000
  },
  printDescriptions: function () {
    console.log('Make: ' + this.make, 'Model : ' + this.model)
  }
}
car.printDescriptions()
console.log(car.year)

const anotherCar = {}
anotherCar.whatever = 'Mercedes'
console.log(anotherCar.whatever)
*/
// Object into Object
/*let obj1 = {
  obj2: {
    marc: 'BMW'
  }
}
console.log(obj1.obj2.marc)
*/
//Another exemple: Object with propery
/*
const obj3 = {
  myObj: [
    {
      a: 'this',
      b: 'can',
      c: 'get',
      d: 'crazy'
    }
  ]
}
console.log(obj3.myObj)
*/

/*
//OJECT CARLOT
const carLot = [
  { year: 2005, make: 'BMW', model: '059r' },
  { year: 2015, make: 'MERCEDEZ', model: '339W' },
  { year: 2012, make: 'DACIA', model: '4559T' }
]
console.log(carLot)
*/

const contacts = {
  custumers: [
    {
      fname: 'Vasco',
      lname: 'Fernando',
      phoneNumber: ['(+212)68595944', '(+212)5868459']
    },
    {
      fname: 'Wesa',
      lname: 'Santa',
      phoneNumber: ['(+244)98595944', '(+244)5868459']
    }
  ],
  employers: [
    {
      fname: 'Bernardeth',
      lname: 'Liatunga',
      phoneNumber: ['(+212)68595944', '(+244)5868459']
    },
    {
      fname: 'Daniel',
      lname: 'Pulino',
      phoneNumber: ['(+212)922595944', '(+244)5868459']
    }
  ]
}

const c = contacts
console.log(c)
