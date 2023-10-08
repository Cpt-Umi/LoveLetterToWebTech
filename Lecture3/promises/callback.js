// Using callbacks
// A function with a callback argument
function first(callback) {
    console.log(`First Function`);
    // In order to call the second function first function requires a callback()
    callback();
}

// Similarly:
function second(callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/10`)
        .then((res) => res.json())
        .then((user) => {
            console.log(`Hi! ${user.name}`);
        })
        .then(() => callback());
}

// As this one is the last, there is no need for a callback()
function third() {
    console.log(`Third Function`);
}

// Calling all functions in a nested manner for synchronous execution
// first(function () {
//     second(function () {
//         third();
//     });
// });

// Executing by arrow functions
first(() => second(() => third()));

// Expected Output:

// First Function
// Hi! Clementina DuBuque
// Third Function
