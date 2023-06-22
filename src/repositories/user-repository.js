import { User } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {

    constructor() {
        super(User);
    }

    async findByEmail(data) {
        try {
            const user = await User.findOne(data);
            return user;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserRepository;