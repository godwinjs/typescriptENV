//  event loop to perform non-blocking io computaton
// Node not good for CPU intensive operation

// commonJs import
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils')


// console.log(`Random Number: ${generateRandomNumber()}`)
// console.log(`CelciusToFerienhiet: ${celciusToFahrenheit(0)}`)

import getPosts, { getPostLength } from "./postController.js";

console.table(getPosts())
console.log(getPostLength())