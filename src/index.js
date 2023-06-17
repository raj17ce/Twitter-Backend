import express from "express";
import { DatabaseConfig, ServerConfig } from "./config/index.js";
import apiRouter from "./routes/index.js";

import { UserRepository, LikeRepository, TweetRepository } from "./repositories/index.js";
let userRepo = new UserRepository();
let likeRepo = new LikeRepository();
let tweetRepo = new TweetRepository();

import { LikeService } from "./services/index.js"

let likeSer = new LikeService();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server started at port ${ServerConfig.PORT}`);
    await DatabaseConfig.connect();
    console.log("MongoDB database connected");

    // const user = await userRepo.create({
    //     name: "Raj",
    //     email: "raj17ce@gmail.com",
    //     password: "123456"
    // })
    // console.log(user);

    const tweets = await tweetRepo.getAll();
    const users = await userRepo.getAll();

    const isAdded = await likeSer.toggleLike(tweets[0].id, "Tweet", users[0].id);
    console.log(isAdded);
});