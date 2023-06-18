import { TweetService } from "../services/index.js";

let tweetService;

class TweetController {

    constructor() {
        tweetService = new TweetService();
    }

    async createTweet(req, res) {
        try {
            const tweet = await tweetService.create(req.body);
            return res.status(201).json({
                success: true,
                message: "Tweet created successfully",
                data: tweet,
                err: {}
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong while creating a tweet",
                data: {},
                err: error
            });
        }
    }
}

export default TweetController;