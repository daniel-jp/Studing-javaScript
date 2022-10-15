function sayHello(name) {
  return () => {
    console.log('Hello', name)
  }
}
const h = sayHello('Daniel')
const e = sayHello('Liatunga')
const l = sayHello('Vasco')
const l1 = sayHello('Vasco')
const o = sayHello('Nana')

h()
e()
l()
l1()
o()
// an ather way
function sayHello(name) {
  return function () {
    console.log('Hello', name)
  }
}
const h2 = sayHello('Dias')
h2()
