import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DBURI = process.env.DatabaseURI;
const JWTSecretKey = process.env.JWTSecretKey;

export default { PORT, DBURI, JWTSecretKey };