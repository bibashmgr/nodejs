// express() methods:

// 1. express.static(roots, [options]):
// used for server side rendering(i.e serves static files)

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './index.html'));
// });

app.get('/about', (req, res) => {
  res.send('This is About page');
});

app.get('/contact', (req, res) => {
  res.send('This is Contact page');
});

app.listen(5000, () => {
  console.log('Server starting at localhost:5000');
});
