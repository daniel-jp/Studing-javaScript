// Interations ou Loop FOR
/*
for (i = 1; i < 10; i++) {
  console.log(i)
}

const arrs = [3, 4, 5, 6, 33, 211, 333]
for (i = 0; i < arrs.length; i++) {
  console.log(arrs[i])
}


const arrs = [1, 2, 3, 22]
for (let b = 0; b < arrs.length; b++) {
  const c = arrs[b]
  console.log(c)
}
*/

var x = 1
/*
while (x < 10) {
  if (x == 7) break
  
  if (x == 7) {
    break
  }
  console.log('\t', x++)
}
*/

var tab = [1, 2, 43, 5, 3, 0, -3]

for (var i = 0; i < tab.length; i++) {
  var min = i
  for (var j = i + 1; j < tab.length; j++) {
    if (tab[j] < tab[min]) {
      min = j
    }
  }

  var temp = tab[i]
  tab[i] = tab[min]
  tab[min] = temp
}
console.log(tab)
return tab
