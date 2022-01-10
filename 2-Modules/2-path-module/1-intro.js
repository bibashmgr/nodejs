// path-module

// The path module provides utilities for working with file and directory paths.
// It can be accessed using:

// const path = require('path');

// The default operation of the path module varies based on the operating system on which a Node.js application is running. i.e. posix & win32

const path = require('path');

// 1. path.basename(path, [extension])
// returns the last portion of a path

const path1 = path.basename('/home/index.html');
console.log(path1);
// returns 'index.html'

const path2 = path.basename('/home/index.html', '.html');
console.log(path2);
// returns 'index'

// using path.basename() might yield different results on POSIX and Windows:

// On POSIX:
const path3 = path.posix.basename('/home/index.html');
console.log(path3);
// returns '/home/index.html'

// On Windows:
const path4 = path.win32.basename('/home/index.html');
console.log(path4);
// returns 'index.html'

// 2. path.dirname(path)
// returns the directory name of the path.
console.log(path.dirname('/portfolio/pages/home/index.html'));
// returns '/portfolio/pages/home'

// 3. path.extname(path)
// returns the extension of the path.
console.log(path.extname('/portfolio/pages/home/index.html'));
// returns '.html'
console.log(path.extname('/portfolio/pages/home/index.'));
// returns '.'
console.log(path.extname('/portfolio/pages/home/index'));
// returns ''
console.log(path.extname('/portfolio/pages/home/index.html.js'));
// returns '.js'

// 4. path.format(pathObject)
// returns a path string from an object.
// opposite of path.parse().

// pathObject = {
//   dir: '',
//   root: '',  ignored when dir is provided
//   base: '',
//   name: '',  ignored when base is provided
//   ext: '',   ignored when base is provided
// };

console.log(
  path.format({
    dir: 'home\\project',
    root: 'project\\',
    base: 'hello.txt',
    name: 'hello',
    ext: '.txt',
  })
);

console.log(
  path.format({
    root: 'project\\',
    name: 'hello',
    ext: '.txt',
  })
);

// 5. path.sep():
// provides the platform-specific path segment separator.
// '\' on Windows
// '/' on POSIX
console.log(path.sep);

// 6. path.join([...paths])
// joins all given path segments together using the platform-specific separator.
console.log(path.join('home', 'pages', 'index.html'));
// returns 'home\pages\index.html'

// 7. path.parse(path)
// returns an object whose properties represent significant elements of the path.
console.log(path.parse('/home/pages/index.html'));
// returns {
//   root: '/',
//   dir: '/home/pages',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }

// 8. path.resolve([..paths])
// resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve('/foo/bar', './baz'));
// returns 'C:\foo\bar\baz'
console.log(path.resolve('/foo/bar', '/tmp/file/'));
// returns 'C:\tmp\file'
