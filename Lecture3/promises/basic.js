// json typicode users
console.log(`First Function`);

// Using fetch fucntion
// fetch is asynchronous by nature
fetch(`https://jsonplaceholder.typicode.com/users/10`)
    .then((res) => res.json())
    .then((user) => {
        console.log(`Hi! ${user.name}`);
    });

console.log(`Third Function`);

// Expected Output:

// First Function
// Third Function
// Hi! Clementina DuBuque
