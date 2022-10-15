// SCOPE : Variables declared inside a { }
//block cannot be accessed from outside the block:

/*
let a = 'Frist'

const scope = () => {
  console.log(a)
}
scope()
//OU
function scope1() {
  console.log(a)
}
scope1()
*/

// Initialize a global variable
var species = 'human mmm'

function transform() {
  // Initialize a local, function-scoped variable
  var species = 'werewolf'
  console.log(species)
}
// Log the global and local variable
console.log(species) // show Initialize a global variable

transform() // show Initialize a local, function-scoped variable
console.log(species) // show Initialize a global variable
