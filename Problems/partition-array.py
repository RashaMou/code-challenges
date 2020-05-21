def partitionArray(k, nums):
    # create dictionary with element as key, and number of times it appears as the value
    num_times = {x: nums.count(x) for x in nums}

    # can there be any elements left over from original array?
    if len(nums) % k != 0:
        return "No"
    if k == 0 or len(nums) == 0:
        return "Yes"

    for num in num_times:
        if num_times[num] > len(nums) / k:
            return "No"
    return "Yes"


print(partitionArray(3, [4, 8, 7, 7, 7, 5, 6, 4]))
