function one() {
  return 'one'
}

console.log(one())
//console.log(typeof one) // functionType
//console.log(typeof one()) // stringType
//const value = one
//console.log(typeof value) // functionType

//console.log(value()) //
// Data type
//String
//Number
//Boolean
//undefined
//function

// my function can return a function,  exemple:

function two() {
  return function () {
    console.log('two')
  }
}
const myFunction = two()
myFunction() // return a function TWO

// OR it can be like this
const three = () => {
  return function () {
    return 'three'
  }
}
 
console.log(three()()) // return a function THREE
console.log(three()) // return structure of function THREE
console.log(three) // return structure of function THREE
