import { Tweet } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {

    constructor() {
        super(Tweet);
    }

    async getAllWithLimit(offset, limit) {
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        }
        catch (error) {
            throw error;
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({
                path: 'comments',
                populate: {
                    path: "comments"
                }
            });
            return tweet;
        }
        catch (error) {
            throw error;
        }
    }
}

export default TweetRepository;