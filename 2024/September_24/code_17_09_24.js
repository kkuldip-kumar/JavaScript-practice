// Simple addition function to be memoization in js
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = func(...args);
        }
        return cache[key];
    };
}

const memoizedAdd = memoize((a, b) => a + b);

// Usage:
console.log(memoizedAdd(1, 2));  // Output: 3
console.log(memoizedAdd(1, 2));  // Output: 3 (retrieved from cache)
console.log(memoizedAdd(3, 4));  // Output: 7
console.log(memoizedAdd(1, 2));  // Output: 3 (retrieved from cache)