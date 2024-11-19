import { AuthService } from "../services/index.js";
import { errorObj, successObj } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

let authService;

class AuthController {

    constructor() {
        authService = new AuthService();
    }

    async logIn(req, res) {
        try {
            const token = await authService.singIn(req.body);

            successObj.message = "Sign in successfully";
            successObj.data = token;

            return res.status(StatusCodes.OK).json(successObj);
        }
        catch (error) {

            errorObj.message = error.message;
            errorObj.err = error;

            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorObj);
        }
    }
}

export default AuthController;