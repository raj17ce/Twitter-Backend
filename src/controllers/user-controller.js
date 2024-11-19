import { UserService } from "../services/index.js";
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let userService;

class UserController {

    constructor() {
        userService = new UserService();
    }

    async register(req, res) {
        try {
            const response = await userService.register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            successObj.message = "Successfully created a new user";
            successObj.data = response;

            return res.status(StatusCodes.CREATED).json(successObj);
        }
        catch (error) {

            errorObj.message = error.message;
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }
}

export default UserController;