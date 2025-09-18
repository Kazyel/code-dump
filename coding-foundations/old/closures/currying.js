/*
 * Currying
 * 
 * Currying is the technique of transforming a function that takes multiple arguments 
 * into a chain of functions, each taking a single argument.
 * 
 * In JavaScript, currying is a technique for creating new functions from existing functions.
 * It is a way to transform a function that takes multiple arguments into a chain of functions, 
 * each taking a single argument.
 * 
 */

// Not curried
const greet = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
}
// Curried
const greetCurry = (firstName) => (lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
}

const greetCurryCall = greetCurry("Kazy");
console.log(greetCurryCall("El"))

