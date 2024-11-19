import { UserRepository } from "../repositories/index.js";

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(data) {
        try {
            let user = await this.userRepository.findByEmail({ email: data.email });
            if (!user) {
                user = await this.userRepository.create(data);
                return user;
            }
            throw new Error("User already exists for given email");
        }
        catch (error) {
            console.log("Something went wrong in user service");
            throw error;
        }
    }
}

export default UserService;