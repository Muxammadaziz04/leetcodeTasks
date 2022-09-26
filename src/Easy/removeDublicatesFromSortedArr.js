const removeDuplicates = (nums = []) => {
    let removedArr = nums.filter((num, index) => nums.indexOf(num) === index)
    removedArr.forEach((num, index) => {
       nums[index] = num
    })
    return removedArr.length
};

console.log(removeDuplicates([1, 2]));