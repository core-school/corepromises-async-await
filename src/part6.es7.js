// PART 6: async await example

const timeout = require("./part1.1.timeout");
// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async function one
const one = async () => {
  console.log("UNO");
  await timeout(2000).then(() => console.log("final")); // <-- LOOK AT THIS!!!
  console.log("Uno y medio");
  return "dos";
};

// Async function read
const read = async () => {
  var html = await one();
  console.log(html);
  return 42;
};

console.log("CUATRO");
read().then(o => console.log("CINCO",o));
console.log("TRES");
var x = read().then(o => console.log(o));
console.log(x);
