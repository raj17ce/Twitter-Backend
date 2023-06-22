import passport from "passport";

export const authenticate = async (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {

        if (err) {
            next(err);
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access",
                data: {},
                error: {}
            });
        }

        req.user = user;
        next();
    })(req, res, next);
}