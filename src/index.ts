import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express();
app.use(cors());
app.use(express.json())
import QueryRoute from "./routes/query"; // Adjust path if necessary
dotenv.config();
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Mongoose connected successfully"));

app.use("/api/query", QueryRoute);
app.get("/",async(req:express.Request,res:express.Response)=>{
  res.status(200).send("Request reached");
})

app.listen(process.env.port, () => {
  console.log("DB IS CONNECTED TO PORT");
});
