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

const firstTextSync = fs.readFileSync('./temp/first.txt', 'utf-8');
console.log(firstTextSync);

const secondTextSync = fs.readFileSync('./temp/second.txt', 'utf-8');
console.log(secondTextSync);

// 2. fs.writeFileSync(file, data, [options])
// options: object containing encoding, mode & flag
// used to write content in a file
// if the file is already exist, then it will overwrite the content.
// if the file isnot exist, then it will create a new file and add the content.

const thirdTextContent = `Here is the content of third.txt file: ${firstTextSync} || ${secondTextSync}`;
console.log(thirdTextContent);

fs.writeFileSync('./temp/third.txt', thirdTextContent);
// the above statement overwrites the content in third.txt file

fs.writeFileSync('./temp/fourth.txt', thirdTextContent, {
  flag: 'a',
});
// the above statement appends the new content with old content in fourth.txt file

// Synchronous API:

// 1. fs.readFile(path, [options], callback)
// callback: callback funtion that handles error and result
fs.readFile('./temp/first.txt', 'utf-8', (error, result) => {
  if (error) {
    console.log(error);
    return null;
  }
  console.log(result);
});

fs.readFile('./temp/second.txt', 'utf-8', (error, result) => {
  if (error) {
    console.log(error);
    return null;
  }
  console.log(result);
});

fs.readFile('./temp/first.txt', 'utf-8', (error, result) => {
  if (error) {
    console.log(error);
    return null;
  }
  // console.log(result);
  const firstTextAsync = result;

  fs.readFile('./temp/second.txt', 'utf-8', (err, res) => {
    if (err) {
      console.log(err);
      return null;
    }
    // console.log(res);
    const secondTextAsync = res;

    fs.writeFile(
      './temp/fifth.txt',
      ` Using Synchronous API: ${firstTextAsync} || ${secondTextAsync}`,
      { flag: 'a' },
      (er, re) => {
        if (er) {
          console.log(e);
          return null;
        }

        fs.readFile('./temp/fifth.txt', 'utf-8', (e, r) => {
          if (e) {
            console.log(e);
            return null;
          }
          console.log(r);
        });
      }
    );
  });
});
