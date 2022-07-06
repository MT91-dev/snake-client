// const { connect } = require("./client");
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};


const handleUserInput = (data) => {

  if (data === '\u0003') {
    process.exit();
  } else if (data === '\u0077') {
    // console.log("W");
    connection.write('Move: up');
  } else if (data === '\u0061') {
    // console.log("A");
    connection.write('Move: left');
  } else if (data === '\u0073') {
    // console.log("S");
    connection.write('Move: down');
  } else if (data === '\u0064') {
    // console.log("D");
    connection.write('Move: right');
  }
};
module.exports = {
  setupInput,
};
