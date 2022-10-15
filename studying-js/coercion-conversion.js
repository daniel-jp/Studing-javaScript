let a = 4
let b = '32' //String value
let c = a + b
console.log(c, ' --> Coercion')
b = parseInt(b, 10) // convert to number
let c2 = a + b
console.log(c2 + ' --> Converted')

let d
d = parseInt(d, 10)
console.log(d)
let e = isNaN(d)
console.log(e) // true
