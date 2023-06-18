import { CommentRepository, TweetRepository } from "../repositories/index.js";

class CommentService {

    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {

        if (modelType === "Tweet") {
            var commentable = await this.tweetRepository.get(modelId);
        }
        else if (modelType === "Comment") {
            var commentable = await this.commentRepository.get(modelId);
        }
        else {
            throw new Error("Unknown model type");
        }

        const newComment = await this.commentRepository.create({
            content: content,
            onModel: modelType,
            commentable: modelId,
            user: userId
        });

        commentable.comments.push(newComment.id);
        await commentable.save();

        return newComment;
    }

}

export default CommentService;