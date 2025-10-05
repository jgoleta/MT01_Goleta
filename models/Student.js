import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {type: String,required: true,},
    email: {type: String,required: true,unique: true,},
    age: {type: Number,required: true,min: 16}
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);