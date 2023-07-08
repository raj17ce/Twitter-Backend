import { TweetRepository } from "../repositories/index.js";
import { CommentService } from "../services/index.js";

const tweetRepository = new TweetRepository();
const commentService = new CommentService();

export const deletComments = async (req, res, next) => {
    const tweet = await tweetRepository.get(req.params.id);

    let comments = tweet.comments;
    comments.forEach(async (comment) => {
        await commentService.delete(comment);
    });

    next();
}