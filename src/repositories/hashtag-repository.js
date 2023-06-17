import { Hashtag } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {

    constructor() {
        super(Hashtag);
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
}

export default HashtagRepository;