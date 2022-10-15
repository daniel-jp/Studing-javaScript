;(function () {
  const clickHandler = message => {
    console.log('Hi!', message)
  }
  let mybutton = document.getElementById('myButton')

  mybutton.addEventListener('click', () => {
    clickHandler(`I am console, thaks to click me`)
  })
})()
