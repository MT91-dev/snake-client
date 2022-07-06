const net = require("net");
const { IP, PORT } = require("./constants")

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Congrats, you have connected successfully!")
    conn.write("Name: MOE");

  });

  conn.on("data", (data) => {
    console.log("Game says:", data);
  });

  return conn;
};

module.exports = {
  connect,
};