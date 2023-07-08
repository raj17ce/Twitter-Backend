import { TweetService } from "../services/index.js";
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let tweetService;

class TweetController {

    constructor() {
        tweetService = new TweetService();
    }

    async createTweet(req, res) {
        try {
            req.body.user = req.user.id;
            const tweet = await tweetService.create(req.body);

            successObj.message = "Tweet created successfully";
            successObj.data = tweet;

            return res.status(StatusCodes.CREATED).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while creating a tweet";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }

    async getTweet(req, res) {
        try {
            const tweet = await tweetService.get(req.params.id);

            successObj.message = "Tweet fetched successfully";
            successObj.data = tweet;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while fetching a tweet";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }

    async deleteTweet(req, res) {
        try {
            const response = await tweetService.delete(req.params.id);

            successObj.message = "Tweet deleted successfully";
            successObj.data = response;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = "Something went wrong while deleting a tweet";
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }
}

export default TweetController;