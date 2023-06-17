import { LikeRepository, TweetRepository } from "../repositories/index.js";

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {

        if (modelType === "Tweet") {
            var likeable = await this.tweetRepository.find(modelId);
        }
        else if (modelType === "Comment") {
            //Toodo
        }
        else {
            throw new Error("Unknown model type");
        }

        let exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });

        console.log(exists);

        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();

            var isAdded = false;
        }
        else {
            const newLike = await this.likeRepository.create({
                onModel: modelType,
                likeable: modelId,
                user: userId
            });
            likeable.likes.push(newLike.id);
            await likeable.save();

            var isAdded = true;
        }

        return isAdded;
    }
}

export default LikeService;