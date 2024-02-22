import { config } from "dotenv";

config();

export default {
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  port: process.env.PORT || '3006',
}