var evens = [0, 2, 4, 6, 8, 10]

for (var i = 0, l = evens.length; i < l; i++) {
  console.log(`${evens[i]} is not odd!`)
}

var evens = [0, 2, 4, 6, 8, 10]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

evens.forEach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

function square(n) {
  console.log(n * n)
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

var animals = ["dog", "fish", "cat"]

doToElementsInArray(animals, changeCompletely)

console.log(animals)
