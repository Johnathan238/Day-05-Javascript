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

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

//1. const arr = []
//2. const arr = [1, 2, 3, 4, 5, 6]

// 3.
//  const arr = [1, 2, 3, 4, 5, 6] 
//  console.log(arr.length) 

//4.
// console.log(arr[0], arr[3], arr[5])

//5.
// const mixedDataTypes = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   [
//     1,2,3,4,
//   ]
// ]

//6.
const itCompanies = [
  "facebook", "google", "microsoft", "apple", "IBM", "oracle" , "amazon"
]

//7.
// console.log(itCompanies)

//8.
// console.log(itCompanies.length)

//9.
// console.log(itCompanies[0], itCompanies[4], itCompanies[6])

//10,
// console.log(itCompanies.join())

//11.
// let namescap = itCompanies.map((string)=>{
//   return string[0].toUpperCase() + string.slice(1)
// })
// console.log(namescap)


//12.
// console.log(`${namescap} are big IT Companies `)

//13.
// let index = itCompanies.indexOf("amazon")
// index === -1 ? console.log(`This company dose not exist`) : console.log(`This company does exist`)

//14.
const results = itCompanies.filter(itCompanies => itCompanies.includes('o'))
console.log(results)

