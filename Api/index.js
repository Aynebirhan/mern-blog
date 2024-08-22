import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODBURL)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server run on port 3000");
});
