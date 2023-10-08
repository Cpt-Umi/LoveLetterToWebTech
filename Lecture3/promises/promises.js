// Using Promises
function first() {
    // Promises always return, and take two parameter: resolve and reject
    return new Promise((resolve, reject) => {
        resolve(`First Function`);
    });
}

// Similarly:
function second() {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/10`)
            .then((res) => res.json())
            .then((user) => resolve(`Hi! ${user.name}`));
    });
}

function third() {
    return new Promise((resolve, reject) => {
        resolve(`Third Function`);
    });
}

// Call the function and right after, use .then()
// Handle promises using .then()
// first().then((data) => {
//     console.log(data);
//     second().then((data) => {
//         console.log(data);
//         third().then((data) => {
//             console.log(data);
//         });
//     });
// });

// Using a better approach
// This way each call is handled in a separate .then()
first()
    .then((data) => console.log(data))
    .then(() =>
        second()
            .then((data) => console.log(data))
            .then(() => third().then((data) => console.log(data)))
    );

// Expected Output:

// First Function
// Hi! Clementina DuBuque
// Third Function
