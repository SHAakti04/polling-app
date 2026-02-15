import mongoose from "mongoose";

const voteSchema = new mongoose.Schema(
  {
    fingerprint: { type: String, required: true },
    optionIndexes: { type: [Number], required: true }
  },
  { _id: false }
);

const optionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    votes: { type: Number, default: 0 }
  },
  { _id: false }
);

const pollSchema = new mongoose.Schema(
  {
    pollId: { type: String, unique: true },
    question: String,
    options: [optionSchema],
    allowMultiple: { type: Boolean, default: false },
    votes: [voteSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Poll", pollSchema);
