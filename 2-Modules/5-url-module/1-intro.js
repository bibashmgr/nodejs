// url-module
// The URL module splits up a web address into readable parts.

const url = require('url');

// const address = url.parse(
//   'http://localhost:8080/default.html?year=2017&month=february',
//   true
// );

// console.log(address);
// console.log(address.href);
// // returns http://localhost:8080/default.html?year=2017&month=february
// console.log(address.protocol);
// // returns http:
// console.log(address.host);
// // returns localhost:8080
// console.log(address.hostname);
// // returns localhost
// console.log(address.port);
// // returns 8080
// console.log(address.path);
// // returns /default.html?year=2017&month=february
// console.log(address.pathname);
// // returns /default.html
// console.log(address.search);
// // returns ?year=2017&month=february
// console.log(address.query);
// // returns { year: '2017', month: 'february' }
// console.log(address.query.year);
// // returns 2017
// console.log(address.query.month);
// // returns february

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const urlAddress = url.parse(req.url, true);
  const actualAddress = '.' + urlAddress.pathname;

  fs.readFile(actualAddress, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('404 Page Not Found');
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(3000);
