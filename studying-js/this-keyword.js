//how to call function

/*
function second() {
  return this
}
// call method
console.log(second() === global)
 
function first() {
  'use strict'
  return this
}

console.log(first() ===  global) // false
console.log(first() === undefined) // true


const myObjt = { value: 'My own object' }

  //This property is set on the global object
global.value = 'Global object'

function third(fname, lname) {
  // Returns something different depending on how
  //we call this method:
  return this.value + fname + lname
}
console.log(third()) // 'Global object'
console.log(third.call(myObjt, ' Daniel', ' Paulino')) //'My own object'
console.log(third.apply(myObjt, [' Vasco', ' Victor'])) //'My own object'
*/

function fifth() {
  console.log(this.fname + ' ' + this.lname)
}

const costume1 = {
  fname: 'John',
  lname: 'Felix',
  print: fifth
}
const costume2 = {
  fname: 'Daniel',
  lname: 'Paulino',
  print: fifth
}
costume2.print()
costume1.print()
