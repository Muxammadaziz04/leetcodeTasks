let twoSum = function(nums, target) {
    if(nums.length < 2 || nums.length > 10000) return
    let numObj = {}
    let result = []
    nums.forEach((num, index) => {
        numObj[num] = index
    })
    nums.forEach((num, index) => {
        if(numObj[target - num] && numObj[target - num] !== index) result = [index, numObj[target - num]]
    })
    return result
};

console.log(twoSum([2,7,11,15], 9))