//  javascript promise 

// What is a promise?
// A promise is an object that represents the result of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected. A pending promise means that the asynchronous operation has not yet completed. A fulfilled promise means that the asynchronous operation has completed successfully. A rejected promise means that the asynchronous operation has failed.

// Example
function delayedMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}


delayedMessage('Hello, World!', 2000).then((res) => { console.log(res) });
// Outputs: Hello, World! after 2 seconds


//Error Handling in Promises
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Something went wrong'));
        }, 1000);
    });
}

fetchDataWithError()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message); // Outputs: Something went wrong
    });



// Promise Race

function racePromises(promises) {
    return Promise.race(promises);
}

const promise1 = new Promise((resolve) => setTimeout(() => resolve('First'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 500));

racePromises([promise1, promise2])
    .then((result) => {
        console.log(result); // Outputs: Second
    });


// promise all settled

function allSettledExample() {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Success 1'), 1000));
    const promise2 = new Promise((_, reject) => setTimeout(() => reject('Error 2'), 500));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve('Success 3'), 1500));

    return [promise1, promise2, promise3];
}

Promise.allSettled(allSettledExample())
    .then((results) => {
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log(`Fulfilled with value: ${result.value}`);
            } else {
                console.error(`Rejected with reason: ${result.reason}`);
            }
        });
        // Outputs:
        // Fulfilled with value: Success 1
        // Rejected with reason: Error 2
        // Fulfilled with value: Success 3
    });

// Promise.all()

function fetchData() {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Data 2'), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve('Data 3'), 1500));

    return [promise1, promise2, promise3];
}

Promise.all(fetchData())
    .then((results) => {
        console.log(results); // Outputs: ['Data 1', 'Data 2', 'Data 3']
    });


// Async/Await with Promises

async function sleep(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, params)

    })
    i
}

async function x() {
    console.log("wait");
    await sleep(2000);
    console.log("hello")
    await sleep(2000)
    console.log("bye")
}

x()