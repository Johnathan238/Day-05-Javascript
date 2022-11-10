const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let newText = text.split(",")
// console.log(newText)
// console.log(newText.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.pop()
// console.log(shoppingCart)
// shoppingCart.unshift("Meat")
// console.log(shoppingCart)
// shoppingCart.push("Sugar")
// console.log(shoppingCart)
// shoppingCart[2] = "Green Tea"
// console.log(shoppingCart)

// if(countries.includes('Ethiopia')){
//   console.log("Yes, its in the arr")
// } else {
//   console.log("Country not here")
// }

const maybeYes = webTechs.includes('Sass') ? console.log('Sass is a CSS Preprocess') : console.log('Sass is not included !')

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullstack = frontEnd.concat(backEnd)

console.log(fullstack)