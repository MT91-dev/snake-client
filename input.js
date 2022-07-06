const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  };
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};


// switch (data) {
//   case '\u0003':
//     process.exit();
//   case 'w':
//     return 'Move: up';
//   case 'a':
//     return 'Move: left';
//   case 's':
//     return 'Move: down';
//   case 'd':
//     return 'Move: right';
// }