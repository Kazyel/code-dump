/*
Binary Search

Binary search is a search algorithm that finds the position of a target value within a **sorted** array. It works by repeatedly dividing the search interval in half.

The algorithm compares the target value with the middle element of the array. If they are equal, the search is successful and the index of the middle element is returned. If the target value is less than the middle element, the search interval is narrowed to the left half of the array. If the target value is greater than the middle element, the search interval is narrowed to the right half of the array.

The process is repeated until the search interval is empty or the target value is found.
*/

const binarySearch = (arr, target) => {
  // Initialize the search interval
  let low = 0;
  let high = arr.length - 1;

  // Loop through the search interval
  while (low <= high) {
    // Calculate the midpoint of the search interval
    let mid = Math.floor((low + high) / 2);

    // If the target value is found, return the index and value
    if (arr[mid] === target) {
      return { index: mid, value: target };
    }

    // If the target value is less than the middle element, narrow the search interval to the left
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      // If the target value is greater than the middle element, narrow the search interval to the rightw
      high = mid - 1;
    }
  }

  return { index: -1, value: null };
}

const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)).sort((a, b) => a - b);
console.log(arr)
console.log(binarySearch(arr, 15));