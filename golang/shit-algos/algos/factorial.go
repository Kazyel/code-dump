package algos

func ConcatArrays(arr [][]int) []int {
	var result []int
	for _, number := range arr {
			result = append(result, number...)
	}
	return result
}

func Factorial(arr [][]int) int {
	concat := ConcatArrays(arr)
	result := 1
	for _, number := range concat {
			result *= number
	}
	return result
}