package algos

import "math"

func BinarySearch(arr []int, number int) bool { 
	low := 0
	high := len(arr) - 1

	for low <= high {
		median := math.Floor(float64(low+high) / 2) 
		
		if(arr[int(median)] < number) {
			low = int(median) + 1
		} else {
			high = int(median) -1
		}
	}

	return low != len(arr) && arr[low] == number 
}