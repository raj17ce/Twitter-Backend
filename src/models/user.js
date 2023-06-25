import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { ServerConfig } from "../config/index.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
}, { timestamps: true });

userSchema.pre("save", function (next) {
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password, ServerConfig.SALT);
    user.password = encryptedPassword;
    next();
});

const User = mongoose.model("User", userSchema);

export default User;