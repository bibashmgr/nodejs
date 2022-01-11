// fs-module

// fs module allows you to work with the file system on your computer.
// Common use:
// 1. Read files
// 2. Create files
// 3. Update files
// 4. Delete files
// 5. Rename files

const fs = require('fs');

// Synchronous API

// 1. fs.readFileSync(path, [options])
// returns the contents of the path.
// path: filename or file descriptor
// options: object containing encoding & flag

const firstText = fs.readFileSync(
  './2-Modules/3-fs-module/temp/first.txt',
  'utf-8'
);
console.log(firstText);

const secondText = fs.readFileSync(
  './2-Modules/3-fs-module/temp/second.txt',
  'utf-8'
);
console.log(secondText);

// 2. fs.writeFileSync(file, data, [options])
// options: object containing encoding, mode & flag
// used to write content in a file
// if the file is already exist, then it will overwrite the content.
// if the file isnot exist, then it will create a new file and add the content.

const thirdTextContent = `Here is the content of third.txt file: ${firstText} || ${secondText}`;
console.log(thirdTextContent);

fs.writeFileSync('./2-Modules/3-fs-module/temp/third.txt', thirdTextContent);
// the above statement overwrites the content in third.txt file

fs.writeFileSync('./2-Modules/3-fs-module/temp/fourth.txt', thirdTextContent, {
  flag: 'a',
});
// the above statement appends the new content with old content in fourth.txt file
