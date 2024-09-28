function productExceptSelf(nums) {
    let result = new Array(nums.length)
    let left = new Array(nums.length);
    left[0] = 1;
    for (let i = 1; i <= nums.length - 1; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    let right = new Array(nums.length);
    right[nums.length - 1] = 1;
    for (let i = nums.length - 2; i > -1; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i] * right[i];
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]))