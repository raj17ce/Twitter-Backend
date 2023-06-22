import JWT from "passport-jwt";
import ServerConfig from "./server-config.js";
import { User } from "../models/index.js";

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: ServerConfig.JWTSecretKey
}

export const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if (!user) {
                done(null, false);
            }
            else {
                done(null, user);
            }
        }));
    }
    catch (error) {
        throw error;
    }
}