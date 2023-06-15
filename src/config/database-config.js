const mongoose = require("mongoose");
const serverConfig = require("./server-config");

async function connect() {
    await mongoose.connect(serverConfig.DBURI);
}

module.exports = {
    connect
}