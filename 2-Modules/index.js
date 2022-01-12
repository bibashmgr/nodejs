const example = require('./2-example');

console.log(example.text);

console.log(example.myFunction(15, 24));

example.items.map((item) => {
  console.log(item);
});

const { id, name, age } = example.myObject;
console.log(id, name, age);
