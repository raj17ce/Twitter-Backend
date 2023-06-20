import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = process.env.PORT;
const DBURI = process.env.DatabaseURI;
const SALT = bcrypt.genSaltSync(9);

export default { PORT, DBURI, SALT };