/*
Recursion

Recursion is a programming technique where a function calls itself to solve a problem. It is a powerful tool for solving complex problems by breaking them down into smaller, more manageable subproblems.

In recursion, a function calls itself with a modified input until a base case is reached, which is a condition that stops the recursion. The base case is essentially a stopping condition that prevents the function from calling itself indefinitely.

Recursion can be used to solve problems that can be broken down into smaller, similar subproblems. It is particularly useful for solving problems that have a recursive structure, such as tree traversal, factorial calculation, and more.

*/

// Recursive function to calculate factorial
const factorial = n => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Recursive function to count from 0 to max
const count = (start, max) => {
  if (start >= max) {
    console.log(start)
    return start;
  }

  console.log(start)
  return count(start + 1, max)
}

count(0, 15);

const findInObject = (obj, target) => {
  // If the object is null, return false
  if (obj === null) {
    return false;
  }

  // If the object's value is equal to the target, return true
  if (obj.value === target) {
    return true;
  }

  // Recursively search the left and right subobjects
  return findInObject(obj.left, target) || findInObject(obj.right, target);
}

const object = {
  value: 5,
  left: {
    value: 3,
    left: null,
    right: {
      value: 7,
      left: null,
      right: {
        value: 9,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      }
    }
  },
  right: {
    value: 6,
    left: null,
    right: {
      value: 8,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: null,
    },
  },
}

console.log(findInObject(object, 4)); // true


const euclideanAlgorithm = (a, b) => {
  if (a === b) {
    return 0;
  }

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }

    let r = a % b;
    return gcd(b, r);
  };

  return gcd(a, b);
}

console.log(euclideanAlgorithm(10, 15)); // 5

const recursiveSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + recursiveSum(arr.slice(1));
}

console.log(recursiveSum([1, 2, 3, 4, 5])); // 15


const recursiveCountAmount = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  return 1 + recursiveCountAmount(arr.slice(1));
}

console.log(recursiveCountAmount([1, 2, 3, 4, 5, 7, 8, 9, 10])); // 9

