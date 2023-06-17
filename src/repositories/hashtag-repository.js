import { Hashtag } from "../models/index.js";

class HashtagRepository {

    async create(data) {
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag;
        }
        catch (error) {
            console.log(error);
        }
    }

    async bulkCreate(data) {
        try {
            const hashtags = await Hashtag.insertMany(data);
            return hashtags;
        }
        catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        }
        catch (error) {
            console.log(error);
        }
    }

    async findByTitle(titleList) {
        try {
            const hashtags = await Hashtag.find({
                title: titleList
            });
            return hashtags;
        }
        catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default HashtagRepository;