const searchInsert = (nums, target) => {
    let index = nums.indexOf(target)
    if(index < 0){
        for(let i = 0; i < nums.length; i++){
            if(nums[i] > target) {
                index = i
                break
            } else {
                index = nums.length
            }
        }
    }
    return index
};

console.log(searchInsert([1,3,5,6], 7));