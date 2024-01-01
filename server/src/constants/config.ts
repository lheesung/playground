import dotenv from "dotenv";
dotenv.config();

const ID = `${process.env.CLIENT_ID}`;
const SECRET = `${process.env.CLIENT_SECRET}`;

export { ID, SECRET };
