/**
 * Linear Search
 *
 * Linear search is a simple search algorithm that sequentially checks each element of the array.
 * It returns the index of the element if it is found, or -1 if it is not found.
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

const linearSearch = (numberToFind: number, array: number[]): boolean => {
  for (const num of array) {
    if (num === numberToFind) {
      return true;
    }
  }

  return false;
};

console.log(linearSearch(5, [2, 30, 10, 40, 5]));

/**
 * Binary Search
 *
 * Binary search is a more efficient search algorithm that works on sorted arrays.
 * It repeatedly divides the search space in half until it finds the target value or determines that it is not present.
 *
 * Time complexity: O(log n)
 * Space complexity: O(1)
 */

const binarySearch = (numberToFind: number, array: number[]): boolean => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (array[middle] === numberToFind) return true;

    if (numberToFind > array[middle]!) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return false;
};

console.log(binarySearch(5, [1, 2, 3, 4, 5]));
