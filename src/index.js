import express from "express";
import passport from "passport";

import { DatabaseConfig, ServerConfig } from "./config/index.js";
import apiRouter from "./routes/index.js";
import { passportAuth } from "./config/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize())
passportAuth(passport);

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);
    await DatabaseConfig.connect();
    console.log("MongoDB database connected");
});