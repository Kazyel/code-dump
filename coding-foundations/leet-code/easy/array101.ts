/**
 *  Leet Code - Duplicate Zeros - Easy - Array101
 */

function duplicateZeros(arr: number[]): void {
  const n = arr.length;
  let zeros = arr.filter((x) => x === 0).length;
  let i = n - 1;
  let j = n + zeros - 1;

  while (i < j) {
    if (j < n) {
      arr[j] = arr[i]!;
    }

    if (arr[i] === 0) {
      j--;
      if (j < n) {
        arr[j] = 0;
      }
    }

    i--;
    j--;
  }

  console.log(arr);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);

/**
 *  Leet Code - Merge Sorted Arrays - Easy - Array101
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i]! > nums2[j]!) {
      nums1[k] = nums1[i]!;
      i--;
    } else {
      nums1[k] = nums2[j]!;
      j--;
    }
    k--;
  }

  console.log(nums1);
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
