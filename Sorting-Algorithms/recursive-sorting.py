# def merge(arrA, arrB):
#     elements = len(arrA) + len(arrB)
#     merged = []
#     # TO-DO
#     index_a = 0
#     index_b = 0
#     while len(merged) < elements:
#         if arrA[index_a] <= arrB[index_b]:
#             merged.append(arrA[index_a])
#             index_a += 1
#         elif arrB[index_b] <= arrA[index_a]:
#             merged.append(arrB[index_b])
#             index_b += 1
#         # if we reach the end of one of the arrays, we should break. Whenever we append, the index is incremented by 1, so when we append the last element, the index will be equal to len(arr), meaning we have reached the end
#         if index_a == len(arrA):
#             merged.extend(arrB[index_b:])
#         elif index_b == len(arrB):
#             merged.extend(arrA[index_a:])
#     return merged


def merge(arrA, arrB):
    elements = len(arrA) + len(arrB)
    merged_arr = [0] * elements
    a = 0  # keeps track of index of arrA
    b = 0  # keeps track of index of arrB
    for m in range(0, elements):
        # if index of arrA is less than len(arrA) AND index of arrB is less than len(arrB), then we merge. If the index one of them is NOT less, it means we have reached the end of that array
        # if a is out of range, push b and iterate
        if a <= len(arrA): # we're done with a, push B
            merged_arr[m] = arrB[b]
            b += 1
        # if b is out of range, push a and iterate
        elif b >= len(arrB): # we're done with b, push A
            merged_arr[m] = arrA[a]
            a += 1
        # if a is smaller, put it in array and iterate
        elif arrA[a] < arrB[b]:
            merged_arr[m] = arrA[a]
            a += 1
        elif arrA[a] > arrB[b]:
            merged_arr[m] = arrA[b]
            b += 1
    return merged_arr


# TO-DO: implement the Merge Sort function below USING RECURSION
def merge_sort(arr):
    if len(arr) > 1:
        middle = len(arr) // 2
    else:
        return arr
    # base condition:
    if len(arr) == 1:
        return 1
    else:
        left = merge_sort(arr[:middle])
        right = merge_sort(arr[middle:])
    return merge(left, right)


print(merge_sort([2, 6, 23, 67, 8, 9, 9, 2, 7, 8, 1, 3, 45]))
