import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DBURI = process.env.DatabaseURI;

export default { PORT, DBURI };