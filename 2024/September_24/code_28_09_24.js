// 27. Remove Element

var removeElement = function (nums, val) {
    let start = 0;
    let length = nums.length;
    while (start < length) {
        if (nums[start] == val) {
            nums[start] = nums[length - 1];
            length -= 1;
        } else {
            start += 1;
        }
    }
    return length;
};