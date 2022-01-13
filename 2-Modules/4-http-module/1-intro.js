// http module:
// allow data transfer over HTTP
const http = require('http');

// 1. http.createServer([options], [requestListener])
// create a HTTP server
// requestListener: function

http
  .createServer((req, res) => {
    // req => request from the client
    // res => response sent to client from the server
    // console.log(req);
    res.write('This is the first response from the server.'); // create response
    res.end(); // end response
  })
  .listen(9999); // send the response to port 9999

// alternative way
const serverOne = http.createServer((req, res) => {
  // console.log(req);
  res.write('This is the second response from the server.');
  res.end();
});

serverOne.listen(6969);

// extra features
const serverTwo = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === '/') {
    res.end(`<p>This is Home page.</p>`);
  } else if (req.url === '/about') {
    res.end(`<p>This is About page.</p>`);
  } else {
    res.end(`<p>Page Not Found!</p><a href='/'>Back to Home</a>`);
  }
});

serverTwo.listen(3333);
