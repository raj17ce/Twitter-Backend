import { TweetRepository, HashtagRepository, UserRepository } from "../repositories/index.js";

class TweetService {

    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
        this.userRepository = new UserRepository();
    }

    async create(data) {
        const content = data.content;

        const tweet = await this.tweetRepository.create(data);
        const user = await this.userRepository.get(tweet.user);
        user.tweets.push(tweet.id);
        await user.save();

        let tags = content.match(/#[a-zA-Z0-9_]+/g); //extracts tags from tweet content

        if (tags) {
            tags = tags.map((tag) => tag.substring(1).toLowerCase()); //removes # and makes the tags lowercase
            tags = [...new Set(tags)]; //removes duplicates from the array

            let alreadyPresentTags = await this.hashtagRepository.findByTitle(tags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            })

            alreadyPresentTags = alreadyPresentTags.map((tag) => tag.title); //makes the array title only

            let newTags = tags.filter((tag) => !alreadyPresentTags.includes(tag));
            newTags = newTags.map((tag) => {
                return {
                    title: tag,
                    tweets: [tweet.id]
                }
            }); //coverts the array of tag strings to tag objects

            await this.hashtagRepository.bulkCreate(newTags);
        }

        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

export default TweetService;