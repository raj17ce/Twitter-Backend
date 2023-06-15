const express = require("express");
const { databaseConfig, serverConfig } = require("./config");

const app = express();

app.listen(serverConfig.PORT, async () => {
    console.log(`Server started at port ${serverConfig.PORT}`);
    await databaseConfig.connect();
    console.log("MongoDB database connected");
});