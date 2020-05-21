def selection_sort(arr):
    # loop through n-1 elements
    for i in range(0, len(arr) - 1):
        cur_index = i
        # set the current index at 0
        smallest_index = cur_index
        # inner loop finds the smallest element by looping through everything to the right of the current index and comparing each element with the element that is currently in the smallest index. If the element is smaller, then we set that to the smallest index.
        for j in range(cur_index, len(arr)):
            if arr[j] < arr[smallest_index]:
                smallest_index = j
        # Once we've found the index of the smallest element, we then set the current index to the index of the smallest element and then repeat the loop n-1 times.
        temp = arr[smallest_index]
        arr[smallest_index] = arr[cur_index]
        arr[cur_index] = temp

    return arr
