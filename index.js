const fs = require('fs');

// Asynchronous API:

// 1. fs.readFile(path, [options], callback)
// callback: callback funtion that handles error and result
const firstTextSync = fs.readFileSync(
  './2-Modules/3-fs-module/temp/first.txt',
  'utf-8',
  (error, result) => {
    if (error) {
      console.log(error);
      return null;
    }
  }
);

console.log(firstTextSync);
