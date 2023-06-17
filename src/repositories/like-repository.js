import { Like } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {

    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        }
        catch (error) {
            console.log(error);
        }
    }
}

export default LikeRepository;