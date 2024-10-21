import { CommentRepository, TweetRepository, LikeRepository } from "../repositories/index.js";

class CommentService {

    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
        this.likeRepository = new LikeRepository();
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

    async deleteLikesOnComment(commentId) {
        const comment = await this.commentRepository.get(commentId);

        let likes = comment.likes;
        likes.forEach(async (like) => {
            await this.likeRepository.destroy(like);
        });

        comment.likes = [];
        await comment.save();
    }

    async deleteLastComment(commentId) {
        await this.deleteLikesOnComment(commentId);

        const response = await this.commentRepository.destroy(commentId);
        return response;
    }

    async deleteCommentsOnComment(commentId) {
        const comment = await this.commentRepository.get(commentId);

        let comments = comment.comments;
        comments.forEach(async (comment) => {
            await this.deleteLastComment(comment);
        });

        comment.comments = [];
        await comment.save();
    }

    async delete(commentId) {
        const comment = await this.commentRepository.get(commentId);

        if (comment.onModel === "Tweet") {
            var commentable = await this.tweetRepository.get(comment.commentable);
        }
        else if (comment.onModel === "Comment") {
            var commentable = await this.commentRepository.get(comment.commentable);
        }

        if(comment.user === commentable.user) {
            await this.deleteLikesOnComment(comment.id);
            await this.deleteCommentsOnComment(comment.id);

            commentable.comments.pull(comment.id);
            await commentable.save();

            const response = await this.commentRepository.destroy(commentId);
            return response;
        }

        throw new Error("You are not authorized to delete this comment.");
    }
}

export default CommentService;