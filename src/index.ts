import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json())
import QueryRoute from "./routes/query"; // Adjust path if necessary

mongoose
  .connect(
    "mongodb+srv://piyushpaliwalofficial868:xkIqoUr7hACQYnSH@cluster0.mwlka.mongodb.net/portfolio_details?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Mongoose connected successfully"));

app.use("/api/query", QueryRoute);

app.listen("5000", () => {
  console.log("DB IS CONNECTED TO PORT 5000");
});
