// setTimeout(function () {
//   console.log('Thanks to show me thais Array!👇🏼👇🏼')
// }, 2000)

// setTimeout(function () {
//   const names = ['Daniel', ' Paulino']
//   console.log(names)
// }, 4000)

// COUNTEUR

let counter = 0
function timeout() {
  setTimeout(function () {
    console.log('Count: ', counter++)
    timeout()
  }, 1000)
}
timeout()
