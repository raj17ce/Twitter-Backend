import { Tweet } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {

    constructor() {
        super(Tweet);
    }

    async getAll(offset, limit) {
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit);
            return tweets;
        }
        catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' });
            return tweet;
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;