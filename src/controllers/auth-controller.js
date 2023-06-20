import { UserService } from "../services/index.js";

let userService;

class AuthController {

    constructor() {
        userService = new UserService();
    }

    async createUser(req, res) {
        try {
            const response = await userService.signUp({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            return res.status(201).json({
                success: true,
                message: "Successfully created a new user",
                data: response,
                err: {}
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong while creating a user",
                data: {},
                err: error
            });
        }
    }
}

export default AuthController;