// const net = require("net");
const { connect } = require("./client");


const handleUserInput = function (data) {
  switch (data) {
    case '\u0003':
      process.exit();
    case 'w':
      return 'Move: up';
    case 'a':
      return 'Move: left';
    case 's':
      return 'Move: down';
    case 'd':
      return 'Move: right';
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


connect();
console.log("Connecting ...");

setupInput();
