import { UserRepository } from "../repositories/index.js";
import bcrypt from "bcrypt";
import { ServerConfig } from "../config/index.js";
import jsonwebtoken from "jsonwebtoken";

class UserService {

    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
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

    async comparePassword(reqbody) {
        try {
            const user = await this.userRepository.findByEmail({ email: reqbody.email });
            return bcrypt.compareSync(reqbody.password, user.password);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async generateJWT(reqbody) {
        try {
            const user = await this.userRepository.findByEmail({ email: reqbody.email });
            return jsonwebtoken.sign({ id: user.id, email: user.email }, ServerConfig.JWTSecretKey, { expiresIn: "1h" });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async singIn(reqbody) {
        try {
            const user = await this.userRepository.findByEmail({ email: reqbody.email });

            if (!user) {
                throw new Error("No user found");
            }

            if (!await this.comparePassword(reqbody)) {
                throw new Error("Incorrect password");
            }

            const token = await this.generateJWT(reqbody);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
}

export default UserService;