// setTimeout(function () {
//   console.log('Thanks to show me thais Array!ππΌππΌ')
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
