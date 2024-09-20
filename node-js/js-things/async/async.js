/*
    Asynchronous programming
    ------------------------
    JavaScript is single-threaded, which means that only one thing can be executed at a time.
    This can be problematic when dealing with tasks that take a long time to complete, such as making an HTTP request or reading a large file.
    To overcome this limitation, JavaScript provides the async/await syntax, which allows you to write asynchronous code that looks and behaves like synchronous code.

    Promises
    --------
    A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected.
    When a Promise is pending, it means that the asynchronous operation is still in progress. When a Promise is fulfilled, it means that the operation has completed successfully and the resulting value is available. When a Promise is rejected, it means that the operation has failed and an error has occurred.

    async/await
    -----------
    The async/await syntax allows you to write asynchronous code that looks and behaves like synchronous code. It uses the Promise object to handle asynchronous operations and provides a cleaner syntax for handling asynchronous code.
*/

const newPromise = (text) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, 1000);
    });
};

/*
    await
    -----
    The await keyword is used to pause the execution of an async function until a Promise is fulfilled or rejected. It can only be used inside an async function.
    When await is used, the function will pause execution until the Promise is resolved, and the resolved value will be returned.
*/
const awaitPromise = (async () => {
    const result = await newPromise("await -> Hello, world!");
    console.log(result);
})();

/*
    Promise.all
    ----------- 
    The Promise.all() method takes an array of Promises and returns a new Promise that is fulfilled with an array of the fulfilled values of the input Promises, or rejected with the reason of the first rejected Promise.
*/
const awaitAllPromises = async (array) => {
    const promiseArray = array.map((item) => newPromise(item));
    const result = await Promise.all(promiseArray);
    console.log(result);
};

awaitAllPromises(["awaitAll -> Hello, world!", "awaitAll -> Hello, again!"]);

/*
    Async Chaining
    -------------
    Async/await allows you to chain multiple asynchronous operations together in a readable and maintainable way. This can be useful when working with multiple asynchronous tasks that need to be executed in sequence.
*/

const asyncChaining = async () => {
    const result1 = await newPromise("Hello, world! Chain");
    const result2 = await newPromise(result1);
    console.log(result2);
};

await asyncChaining();

/*
    Promise.race
    ------------
    The Promise.race() method takes an array of Promises and returns a new Promise that is settled with the result of the first Promise that is fulfilled or rejected.
    If the input array is empty, the returned Promise is rejected with a TypeError.
*/

const promiseRace = (async () => {
    const result = await Promise.race([
        newPromise("Hello, world!"),
        newPromise("Hello, again!"),
    ]);
    console.log(result);
})();
