/**
 *  Bubble Sort
 *
 *  Bubble sort is a simple sorting algorithm that repeatedly steps through the list,
 *  compares adjacent elements and swaps them if they are in the wrong order.
 *  The pass through the list is repeated until the list is sorted.
 *
 *  Time complexity: O(n^2)
 *  Space complexity: O(1)
 */

const bubbleSort = (array: number[]): number[] => {
  console.log("-> Starting Bubble Sort <-", "\n--------------------------");

  let iterationCounter = 0;

  for (let i = 0; i < array.length; i++) {
    iterationCounter++;

    for (let j = 0; j < array.length - 1; j++) {
      iterationCounter++;

      if (array[i]! < array[j]!) {
        const temp = array[j];
        array[j] = array[i]!;
        array[i] = temp!;
      }

      console.log(
        `O(${iterationCounter})`,
        `| Current Array: ${array}`,
        `| Current i: ${array[i]}`,
        `| Current j: ${array[j]}`
      );
    }
  }

  console.log("Sorted array:", array);
  return array;
};

// Uncomment this to see in action:
// bubbleSort([43, 1, 23, 4, 0, 12]);

/**
 *  Selection Sort
 *
 *  Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the
 *  unsorted portion of the array and placing it at the beginning of the sorted portion.
 *
 *  The algorithm divides the array into two parts: a sorted portion (initially empty) and an unsorted portion (initially the entire array).
 *  In each iteration, it finds the smallest element in the unsorted portion and swaps it with the first element of the unsorted portion,
 *  effectively growing the sorted portion by one element.
 *
 *  Time complexity: O(n^2)
 *  Space complexity: O(1)
 */

const selectionSort = (array: number[]): number[] => {
  console.log("-> Starting Selection Sort <-", "\n--------------------------");

  let swapCount = 0;

  // Don´t need to go through every element since the inner loop is already one index ahead
  for (let i = 0; i < array.length - 1; i++) {
    // Initiate to the current index
    let smallest = i;

    // Look for elements that are smaller than the current smallest
    for (let j = i + 1; j < array.length; j++) {
      if (array[j]! < array[smallest]!) {
        smallest = j;
  	    }
    }

    // If the smallest is equal the current index, skip because it's already in place!
    if (smallest !== i) {
      console.log(`Array pre-swap: ${array}`);

      // Basic element swapping
      const temp = array[i];
      array[i] = array[smallest]!;
      array[smallest] = temp!;
      swapCount++;

      console.log(
        `Swap number: ${swapCount}`,
        `| Current smallest ${array[smallest]}`,
        `| Current to swap: ${array[i]}`,
        `\nArray after swap: ${array}`,
        `\n------------------------------------------`
      );
    }
  }

  console.log("Sorted array:", array);
  return array;
};

// Uncomment this to see in action:
// selectionSort([43, 1, 23, 4, 0, 15]);


/**
 *  Merge Sort 
 * */

