// Function declaration

// function hellow() {
//   // variable declarations areas
//   console.log('---------------------')
//   console.log('---------------------')
//   console.log('----HELLOW DEVS!-----')
//   console.log('---------------------')
//   console.log('---------------------')
// }
// //hellow()

// const repet = hellow
// repet()
// repet()
// repet()

// function hellow(name) {
//   // variable declarations areas
//   console.log('---------------------------------')
//   console.log('----HELLOW DEVS ' + name + '-----')
//   console.log('---------------------------------')
// }
// hellow('Daniel')
// hellow('Malick')
// hellow('Vasco')
// hellow('Felix')

// const f = function (name) {
//   return (
//     'Dev : ' +
//     name +
//     ' Daniel' +
//     ' Data Sc : ' +
//     name +
//     ' Vasco' +
//     'DevOs : ' +
//     name +
//     ' Malick ' +
//     'Dev : ' +
//     name +
//     ' Felix '
//   )
// }
// const a = f(name)
// console.log(a)

const calculateTax = amount => {
  let result = amount * 0.0825
  return result
}
const tax = calculateTax(100)
console.log(tax)
