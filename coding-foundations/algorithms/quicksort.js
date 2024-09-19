/*
Quicksort

Quicksort is a divide-and-conquer algorithm that works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

The algorithm works by choosing a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.
*/

function partition(arr, low, high) {
  // Choose the pivot element from the sub-array (typically the last element)  
  const pivot = arr[high];
  let i = low;

  for (let j = low; j < high; j++) {
    // If the current element is less than the pivot, swap it with the element at index i
    // and move the boundary for smaller elements to the right (increment i).
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // Swap the pivot element with the element at index i
  // This places the pivot in its correct position in the sorted array.  
  [arr[i], arr[high]] = [arr[high], arr[i]];
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }

  return arr
}

const arr100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
console.log(quickSort(arr100, 0, arr100.length - 1));