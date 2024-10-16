import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model("Portfolio Details", schema);

export default Query;
