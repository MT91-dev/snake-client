// const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");


// const handleUserInput = function (data) {
//   if (data === '\u0003') {
//     process.exit();
//   };
// };

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   stdin.on("data", handleUserInput);

//   return stdin;
// };


console.log("Connecting ...");

connect();

setupInput();
