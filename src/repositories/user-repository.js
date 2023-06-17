import { User } from "../models/index.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {

    constructor() {
        super(User);
    }
}

export default UserRepository;