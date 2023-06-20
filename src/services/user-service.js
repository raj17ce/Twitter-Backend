import { UserRepository } from "../repositories/index.js";

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in user service");
            return error;
        }
    }
}

export default UserService;