// // array é uma coleccao de dados
//Funções Array em JavaScript que sao:
// PUSH, FILTER, FIND, INCLUDES, SLICE, POP,MAP, REVERSE,
// AND forEach
// //ex1: Retorna dados do tipo string
const arrayNames = ['daniel-paulino', 'fred', 'fred', 'Bernardeth']
console.log('ArrayNames: ', arrayNames)
console.log('Position: ', arrayNames[2])
// // PUSH para inserir itens no fim do ARRAY
arrayNames.push('Joaquim', 'Nana')
console.log('ArrayNames: ', arrayNames)

// // FILTER para pesquisar dentro do array
// //ex2: Ele retorna o valor pesquisado
const arrname = arrayNames.filter(function (name) {
  return name === 'fred'
})
console.log('ArrayNames: ', arrname)
// //ex2: podemos minimizar a function
// //Obs: Retorna todos os valores ecepto "fred"
const arname = arrayNames.filter(name => {
  return name !== 'fred'
})
console.log('ArrayNames: ', arname)

// // pesquiaar usando FIND
// // Retorna somente um valor(mesmo tendo 2 'fred')
const arname1 = arrayNames.find(name => {
  return name === 'fred'
})
console.log('ArrayNames: ', arname1)
// // reduzir a função
// //Obs:Retorna o primeiro valor q encontrar, ecepto 'fred'.
const arname2 = arrayNames.find(name => name !== 'fred')
console.log(arname2)

// //INCLUDES
// //ex3: Retorna TRUE ou FALSE
const arn = arrayNames.includes('fred')
console.log('ArrayNames: ', arn)

// //Update
// //ex4: Faz actualização do Array(arrayNames)
const arUpdate = [...arrayNames, 'Vasco']
console.log('ArrayNames: ', arUpdate) //['daniel-paulino', 'fred', 'fred', 'Bernardeth', 'Joaquim', 'Nana', 'Vasco']
// //Ex4: Remove dados dando as suas posicoes.
console.log('ArrayNames: ', arUpdate.slice(1, -1)) //['fred', 'fred', 'Bernardeth', 'Joaquim', 'Nana'] OU
const arupdatename = arUpdate.slice(1, -1) //['fred', 'fred', '
// console.log(arupdatename)

arrayNames.pop() // Remove o ultimo do array
console.log('ArrayNames: ', arrayNames)

//Map
// Transforma o array em uma so fruta
const arrFruitas = ['🍎', '🍌', '🍓', '🥭', '🍋']

console.log('ArrayFrutas: ', arrFruitas)
const arrReversefname = arrFruitas.map(function (f) {
  return '🥭'
})

//Rverse
// Para reverter as frutas no array
const arrReverse = arrFruitas.reverse()
console.log('ArrayFrutas: ', arrReverse)

// forEach não é p usar o "return"
// Somente uma interacao ou repetir para cada fruta
arrFruitas.forEach(function (f) {
  console.log('ArrayFruta: ', f)
})

const arrName = 'Eu Daniel gosto muit de programar, mas me canso rapido'
const arn1 = arrName.split('', 4)
console.log(arn1)
