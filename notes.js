// ** syntax
// const arr = Array()
// ** or
// let arr = new Array()
// console.log(arr) // []

// ** syntax
// This the most recommended way to create an empty list
// const arr = []
// console.log(arr)

//// Array with initial values. We use length property to find the length of an array.
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// // Print the array and its length
// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

//// Creating an array using split
// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// // the text has special characters think how you can just get only the words
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

/////// Accessing array items using index
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// // Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit)  // lemon

///////// Modifying array element
// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10      // changing 1 at index 0 to 10
// numbers[1] = 20      // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// countries[0] = 'Afghanistan'  // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)


/////////// Creating static values with fill
// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]


/////////Concatenating array using concat
// const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// console.log(fruitsAndVegetables)

////////Getting index an element in arr array
//////// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1


//////// Check an element if it exist in an array.
// let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does exist in the array

// // we can use also ternary here
// index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// // let us check if an avocado exist in the array
// let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
// if(indexOfAvocado === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does not exist in the array

/////////includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.includes('Node'))  // true
// console.log(webTechs.includes('C'))     // false

//////////// Checking array
// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

////////// Converting array to string
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

/////// Joining array elements
/////// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.


// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

//////Slice array elements
//////Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// const numbers = [1,2,3,4,5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

///////Splice method in array
///////Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(numbers)                // -> remove all items

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,1)
// console.log(numbers)            // remove the first item

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers.splice(3, 3, 7, 8, 9)
// console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

/////////Adding item to an array using push
/////////Push: adding item in the end. To add item to the end of an existing array we use the push method.

// ** syntax
// const arr  = ['item1', 'item2','item3']
// arr.push('new item')
// console.log(arr)
// ** ['item1', 'item2','item3','new item']

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

///////// Removing the end element using pop
//////// pop: Removing item in the end.
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]

////////Removing an element from the beginning
///////shift: Removing one array element in the beginning of the array.
// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]

//////// Add an element from the beginning
//////// unshift: Adding array element in the beginning of the array.
// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

/////// Reversing array order
////// reverse: reverse the order of an array.
// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

//////Sorting elements in array
//////sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// webTechs.sort()
// console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse() // after sorting we can reverse it
// console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

///////Array of arrays
///////Array can store different data types including an array itself. Let us create an array of arrays/

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
// console.log(arrayOfArray[0]) // [1, 2, 3]

//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

