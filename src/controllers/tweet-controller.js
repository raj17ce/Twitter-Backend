const { TweetService } = require("../services");

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
                response: tweet,
                err: {}
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong while creating a tweet",
                response: {},
                err: error
            });
        }
    }
}

module.exports = TweetController;