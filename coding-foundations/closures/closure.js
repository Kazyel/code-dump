/**
 * Closures
 * 
 * A closure is a function that has access to the outer (enclosing) function’s variables 
 * (usually its free variables), even when that function is executing in a different scope.
 * 
 * In JavaScript, closures are created every time a function is created. 
 * A closure is created when a function is defined, not when it is called.
 * 
 * In JavaScript, a closure has access to its lexical environment, which consists of 
 * all the variables in its scope, whether or not those variables are declared with the 
 * var keyword. A closure can close over variables that are in a higher scope than itself.
 * 
 * In JavaScript, the scope chain is formed by function calls. When a function is called, 
 * a new scope is created. When the called function returns, its scope is destroyed. 
 * The scope chain forms a chain of nested scopes, with the global scope at the top.
 */

const closureFunction = () => {
  let counter = 1;

  const insideFunction = () => {
    counter++;
    return counter
  }

  return insideFunction;
}

const closure = closureFunction(); // Initially, counter is 1
const closure2 = closureFunction(); // Initially, counter is also 1

console.log("First closure:", closure())
console.log("First closure:", closure())

console.log("Second closure:", closure2())
console.log("Second closure:", closure2())
console.log("Second closure:", closure2())

console.log("First closure:", closure())

/**
 * Memoization
 * 
 * Memoization is a design pattern that caches the results of function calls so that 
 * subsequent calls with the same arguments can be served from the cache, instead of 
 * recomputing the function results.
 * 
 * Closures can be used to implement memoization.
 */

const highCostFunction = (number) => {
  const memoSet = new Map()

  return memoizationFunction = (number) => {
    if (memoSet.has(number)) {
      console.log("Memoization hit!", memoSet)
      return
    }

    const highCostNumber = number ** 100;
    console.log("Memoization miss!", memoSet)
    memoSet.set(number, highCostNumber)

    return
  }
}

const runMemoizedFunction = highCostFunction()

console.log("")
console.time("First run")
runMemoizedFunction(1000)
console.timeEnd("First run")

console.time("Second run")
runMemoizedFunction(1000)
console.timeEnd("Second run")

/**
 * Once function
 *  
 * A function that can only be called once. 
 * It will return the value of the first call, and then return the same value on subsequent calls.
 */

const multiplyByThree = (number) => {
  return number * 3;
}

const runOnce = (func) => {
  let hasRun = false;
  let num

  return (x) => {
    if (hasRun) {
      console.log("Can only be called once.")
      return
    }

    hasRun = true;
    num = func(x);
    return num;
  }
}

let multiplyByThreeOnce = runOnce(multiplyByThree);
console.log(multiplyByThreeOnce(5));
console.log(multiplyByThreeOnce(10));
console.log(multiplyByThreeOnce(15));

