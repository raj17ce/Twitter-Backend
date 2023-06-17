import mongoose from "mongoose";
import ServerConfig from "./server-config.js";

async function connect() {
    await mongoose.connect(ServerConfig.DBURI);
}

export default { connect };