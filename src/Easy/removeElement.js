const removeElement = (nums, val) => {
    const removedArr = nums.filter((num) =>  num !== val)
    removedArr.forEach((num, i) => {
        nums[i] = num
    })
    return removedArr.length
};

console.log(removeElement([3,2,2,3]));