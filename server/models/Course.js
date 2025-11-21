import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  intro: { type: String },
  video: { type: String }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author:{type:String},
  description: { type: String },
  category: { type: String },
  price: { type: String, default: "Free" },
  students: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  duration: { type: String },
  image: { type: String }, // <-- image URL
  modules: [moduleSchema],
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
