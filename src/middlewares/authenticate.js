import passport from "passport";
import { errorObj } from "../utils/index.js"
import { StatusCodes } from "http-status-codes";

export const authenticate = async (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {

        if (err) {
            next(err);
        }

        if (!user) {

            errorObj.message = "Unauthorized access";

            return res.status(StatusCodes.UNAUTHORIZED).json(errorObj);
        }

        req.user = user;
        next();
    })(req, res, next);
}