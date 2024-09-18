
// write a function to find the fibonacci series of n terms

// using 1st approach
function findFib(n) {

    let series = [0, 1];

    for (let i = 2; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

console.log(findFib(10))

//  Dynamic 2nd  approach
function fibonacciSeries(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    // Initialize the series with the first two numbers
    let dp = [0, 1,];

    // Use dynamic programming to build the series up to the n-th number
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp;
}

console.log(fibonacciSeries(10));

// write a function  to find the tribonacci series of n terms


// using 1st approach
function findSeries(n) {
    let series = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        series.push(series[i - 1] + series[i - 2] + series[i - 3])
    }
    return series;
}

console.log(findSeries(10))


//  Dynamic 2nd approach

function tribonacciSeries(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    if (n === 2) return [0, 1, 1];

    // Initialize the series with the first three numbers
    let dp = [0, 1, 1];

    // Use dynamic programming to build the series up to the n-th number
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp;
}

console.log(tribonacciSeries(10));