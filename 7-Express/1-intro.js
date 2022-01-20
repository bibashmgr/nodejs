// Express

// A simple example:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //   console.log(req);
  //   console.log(res);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Starting server at http://localhost:${port}...`);
});

// Basic Routing:
// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
// Basic structure:
// app.METHOD(PATH, HANDLER);

// api vs ssr
// api => data // res.json()
// ssr => tempelate // res.render()
