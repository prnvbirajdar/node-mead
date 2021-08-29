
// first main() get put on the call stack, follwed by the add function
// add executes logs 'add 1' and 'add 2' in sync
// add is executed. add and main are removed from stack
// timeout event goes to node thread
// waits for 2 seconds
// then executes all the logs within the callback function
// logs of function 1, sum, and function 2 are all in call queue
// they get logged one by one after

const add = (a, b, callback) => {
    console.log('add 1');

    setTimeout(()=>{
        callback(a + b)
    }, 2000)

    console.log('add 2');
}


add(1, 4, (sum) => {
    console.log('function 1');
    console.log(sum) // Should print: 5
    console.log('function 2');
})