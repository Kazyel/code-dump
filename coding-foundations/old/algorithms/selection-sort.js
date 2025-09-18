/*
Selection Sort

Selection sort is a simple sorting algorithm that works by dividing the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.

The algorithm proceeds by finding the smallest (or next largest, if negative numbers are being sorted) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

The sorted sublist is then appended to the sorted list and the process is repeated with the unsorted sublist.
*/

const selectionSort = arr => {
  // Create a copy of the array
  const sortNums = [...arr]

  for (let i = 0; i < sortNums.length; i++) {
    let smallestIndex = i

    // Find the smallest element in the unsorted sublist
    for (let j = i + 1; j < sortNums.length; j++) {
      // If the current element is smaller than the smallest element, update the smallest index
      if (sortNums[j] < sortNums[smallestIndex]) {
        smallestIndex = j
      }
    }

    // If the smallest index is not the current index, swap the elements
    if (smallestIndex !== i) {
      // Temporarily store the current element
      const temp = sortNums[i]

      // Swap the elements
      sortNums[i] = sortNums[smallestIndex]
      sortNums[smallestIndex] = temp
    }
  }

  return sortNums
}

console.log(selectionSort([3, 5, 1, 4, 2])); // [1, 2, 3, 4, 5]