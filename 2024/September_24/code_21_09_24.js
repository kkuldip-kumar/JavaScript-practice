//find the longest common prefix sequence

function findLongestCommonPrefix(strArr) {
    if (strArr.length === 1) return strArr[0];
    let result = '';
    strArr.sort();
    let first = strArr[0];
    let last = strArr[strArr.length - 1];
    //start to compare
    for (let i = 0; i < first.length; i++) {
        if (first[i] != last[i]) {
            break;
        }
        result += first[i];
    }
    return result;
}
let dd = ['club', 'clap', 'clove']
console.log(findLongestCommonPrefix(dd))