const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Congrats, you have connected successfully!")
    conn.write("Name: LOL");

  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: left");
  //     conn.write("Move: up");
  //   }, 200);

  // });

  conn.on("data", (data) => {
    console.log("Game says:", data);
  });

  // conn.on("data", (data) => {
  //   conn.write(`${}`);

  // });

  return conn;
};

module.exports = {
  connect,
};