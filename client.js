const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.0.236",
    port: 50541
  });
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    conn.write("Name: NOA");
  });
  return conn;
};

module.exports = connect;
