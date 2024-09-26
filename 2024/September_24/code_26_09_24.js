// min size sub array using sliding window
function minSizeArr(target, nums) {
    let slow = 0;
    let fast = 0;
    let minWindowSize = Infinity;
    let currentSum = 0;
    while (fast < nums.length) {
        currentSum += nums[fast];
        fast++;
        while (currentSum >= target) {
            let currentWindowSize = fast - slow;
            minWindowSize = Math.min(minWindowSize, currentWindowSize)
            currentSum -= nums[slow];
            slow++;
        }
    }
    return minWindowSize === Infinity ? 0 : minWindowSize
}

console.log(minSizeArr(7, [2, 3, 1, 2, 4, 3]))