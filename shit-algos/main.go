package main

import (
	"fmt"
	"shit-algos/main/algos"
	"shit-algos/main/structs"
)

func main() {
	var numbersArray = [][]int{{1, 2, 3}, {4, 5, 6}, {7}, {8}, {9}}
	var numbers = []int{1, 4, 5, 3, 2, 8, 1}
	var quickSorted = algos.QuickSort(numbers)
	var mergeSorted = algos.MergeSort(numbers)
	var searchArray = []int{1, 2, 3, 4, 5}

	fmt.Println(algos.BinarySearch(searchArray, 2))
	fmt.Println(algos.Factorial(numbersArray))
	fmt.Println(quickSorted)
	fmt.Println(mergeSorted)

	fmt.Println(structs.MateusMascarelo.PrintUserData())
	fmt.Println(structs.Isabelle.PrintUserData())
}
