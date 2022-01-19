// js is a single-threaded
// js reads the code line by line

// event loop allows to perform non-blocking operations

// 1-example:
console.log('first task');
console.log('second task');
console.log('third task');
// returns:
// first task
// second task
// third task

// 2-example:
console.log('first task');
setTimeout(() => {
  // async function
  console.log('second task');
}, 0);
console.log('third task');
// returns:
// first task
// third task
// second task
