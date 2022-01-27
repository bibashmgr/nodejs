// app object:
// The app object has methods for
// 1. Routing HTTP requests; see for example, app.METHOD and app.param.
// 2. Configuring middleware; see app.route.
// 3. Rendering HTML views; see app.render.
// 4. Registering a template engine; see app.engine.

const express = require('express');

const app = express();

// 1. app.listen(port, callback):
// Binds and listens for connections on the specified port.

app.listen('5000', () => {
  console.log('Server is running on locahost:5000');
});

// 2. app.METHOD(path, callback):
// Routes an HTTP request, where METHOD is the HTTP method of the request, such as GET, PUT, POST, DELETE, and so on in lowercase.

// a. app.get(path, callback):
// Routes HTTP GET requests to the specified path with the specified callback functions.
app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

// b. app.post(path, callback):
// Routes HTTP POST requests to the specified path with the specified callback functions.
app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

// c. app.put(path, callback):
// Routes HTTP PUT requests to the specified path with the specified callback functions.
app.put('/', function (req, res) {
  res.send('PUT request to homepage');
});

// d. app.delete(path, callback):
// Routes HTTP DELETE requests to the specified path with the specified callback functions.
app.delete('/', function (req, res) {
  res.send('DELETE request to homepage');
});

// e. app.all(path, callback):
// Its callback function is executed whenever any request is made, that request can be GET, POST, DELETE and so on.
app.all('/', function (req, res) {
  res.send('ANY KIND OF request to homepage');
});

// 3. app.use():

// 4. app.route():

// 5. app.render():

// 6. app.path():

// 7. app.param():
