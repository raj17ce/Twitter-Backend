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
            const user = await this.userRepository.create(data);
            return user;
        }
        catch (error) {
            console.log("Something went wrong in user service");
            return error;
        }
    }

    async comparePassword(reqbody) {
        try {
            const user = await this.userRepository.findByEmail({ email: reqbody.email });
            return bcrypt.compareSync(reqbody.password, user.password);
        } catch (error) {
            console.log(error);
        }
    }

    generateJWT(reqbody) {
        try {
            return jsonwebtoken.sign({ id: reqbody.id, email: reqbody.email }, ServerConfig.JWTSecretKey, { expiresIn: "1h" });
        }
        catch (error) {
            console.log(error);
        }
    }

    async singIn(reqbody) {
        try {
            const user = await this.userRepository.findByEmail({ email: reqbody.email });

            if (!user) {
                throw {
                    success: false,
                    message: "No user found",
                    data: {},
                    error: {}
                }
            }

            if (!await this.comparePassword(reqbody)) {
                throw {
                    success: false,
                    message: "Incorrect password",
                    data: {},
                    error: {}
                }
            }

            const token = this.generateJWT(reqbody);
            return token;
        }
        catch (error) {
            throw error;
        }
    }
}

export default UserService;