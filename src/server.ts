import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import shortnerRouter from "./routes/shortener";

dotenv.config();
const DB_CONNECT = process.env.DB_CONNECT as string;
const port = process.env.PORT || 3000;

mongoose.connect(
  DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to db")
);

const app = express();

app.use(express.json());

app.use("/shortner", shortnerRouter);

app.listen(port, () => {
  console.log(`Server started at: ${port}`);
});
