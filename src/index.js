const express = require("express");
const { DatabaseConfig, ServerConfig } = require("./config");
const apiRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);
    await DatabaseConfig.connect();
    console.log("MongoDB database connected");
});