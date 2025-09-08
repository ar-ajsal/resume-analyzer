import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: [String], default: [] },
  experience: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
