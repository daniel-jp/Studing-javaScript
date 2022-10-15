//Arrow-function
//(1)
/*
const Hi = () => {
  console.log('Arrow-function test:')
}
Hi()
//(2)
const hi2 = (name, pren) => {
  //console.log('Arrow-function test2' + name)
  console.log(`Arrow-function test2: ${name}, ${pren}`)
}
hi2(' Daniel', 'Paulino')

//media
const add = [1, 2, 3, 4]

const res = add.reduce(function (a, b) {
  return a + b / 4
})
console.log(res)

let add2 = (a, b) => {
  return a + b
}
//const sum = add2(4, 5)
//console.log(sum)
console.log(add2(4, 5))

function tabMed(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] / 3
  }
  return sum
}
console.log(tabMed([2, 3, 4]))
*/

const names = [
  'Daniel Paulino',
  'Bernardeth Liatunga',
  'Simba Mataya',
  'Vasco Fernado'
]
let i = 0
names.map(name => {
  i++
  console.log(i, name)
})
