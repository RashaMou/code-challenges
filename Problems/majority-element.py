# given an array of size n, find the majority element(element that appears more than n/2 times).

# populate hashmap with counts of each of the numbers in the input list
# look through hashmap to see which number has a value > n// 2


def majorityElement(nums):
    counts = {}

    for n in nums:
        if n in counts:
            counts[n] += 1
        else:
            counts[n] = 1

    for key, values in counts.items():
        if values > len(nums) // 2:
            return key


print(majorityElement([1, 2, 3, 4, 4, 4, 4]))
