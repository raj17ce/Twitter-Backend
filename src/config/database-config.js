const mongoose = require("mongoose");
const ServerConfig = require("./server-config");

async function connect() {
    await mongoose.connect(ServerConfig.DBURI);
}

module.exports = {
    connect
}