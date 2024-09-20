// Left rotate a array up to k number of times
function reverseArray(nums, startIdx, endIdx) {
    while (startIdx < endIdx) {
        let temp = nums[startIdx];
        nums[startIdx] = nums[endIdx];
        nums[endIdx] = temp;
        startIdx++;
        endIdx--;
    }
    // return nums
}

function rotateLeftArr(arr, k) {
    k %= arr.length;
    // reverse all the elements;
    reverseArray(arr, 0, arr.length - 1);
    // reverse first arr.length-k numbers
    reverseArray(arr, 0, arr.length - k - 1);

    // reverse last k numbers
    reverseArray(arr, arr.length - k, arr.length - 1);

    return arr;

}

console.log(rotateLeftArr([3, 5, 6, 8, 11, 2], 4))