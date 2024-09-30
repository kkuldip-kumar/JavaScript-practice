// merge sorted Array.
// leet code  88
var merge = function (nums1, m, nums2, n) {
    let x = m - 1;
    let y = n - 1;

    for (let z = m + n - 1; z >= 0; z--) {
        if (x < 0) {
            nums1[z] = nums2[y];
            y -= 1;
        } else if (y < 0) {
            break
        } else if (nums1[x] > nums2[y]) {
            nums1[z] = nums1[x];
            x -= 1;
        } else {
            nums1[z] = nums2[y];
            y -= 1;
        }
    }
};

var merge = function (nums1, m, nums2, n) {
    var j = 0;
    for (let i = nums1.length; i >= m; i--) {
        if (nums1[i] === 0) {
            nums1.splice(i, 1);
            nums1.push(nums2[j]);
            j++;
        }
    }
    nums1.sort((a, b) => a - b)
};