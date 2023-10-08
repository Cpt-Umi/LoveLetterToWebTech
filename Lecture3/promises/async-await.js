function first() {
    console.log(`First Function`);
}

// Only use async await where needed
// An async function always expects an await
async function second() {
    await fetch(`https://jsonplaceholder.typicode.com/users/10`)
        .then((res) => res.json())
        .then((user) => {
            console.log(`Hi! ${user.name}`);
        });
}

function third() {
    console.log(`Third Function`);
}

(async () => {
    first();
    // Add await where synchronous behavior is required
    await second();
    third();
})();

// Expected Output:

// First Function
// Hi! Clementina DuBuque
// Third Function
