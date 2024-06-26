package algos

func QuickSort(arr []int) []int {
    if len(arr) <= 1 {
        return arr
    }

    pivot := arr[0]
    var left, right []int

    for _, num := range arr[1:] {
        if num <= pivot {
            left = append(left, num)
        } else {
            right = append(right, num)
        }
    }

    left = QuickSort(left)
    right = QuickSort(right)

    return append(append(left, pivot), right...)
}


