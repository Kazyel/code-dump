package main

import (
	"fmt"
	"shit-algos/main/algos"
)

func main() {
    var numbersArray = [][]int{{1, 2, 3}, {4, 5, 6}, {7}, {8}, {9}}
    var numbers = []int{ 1, 4, 5 ,3 ,2 , 8, 1 }
    var quickSorted = algos.QuickSort(numbers)
    var mergeSorted = algos.MergeSort(numbers)

    fmt.Println(algos.Factorial(numbersArray))
    fmt.Println(quickSorted)
    fmt.Println(mergeSorted)
}