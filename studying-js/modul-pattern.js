const counter = (function () {
  let count = 0
  function print(message) {
    console.log(message + '---' + count)
  }

  return {
    value: count,
    increment: function () {
      count += 1
      print('after increment')
    },
    reset: function () {
      print('Before reset: ')
      count = 0
      print('After reset: ')
    }
  }
})()

counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.value)
counter.reset()
