import mongoose from "mongoose";
import { iTask } from "../utils/interfaces";


interface iTaskData extends iTask, mongoose.Document {}

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    name: {
      type: String,
    },
    stepToggle: {
      type: Boolean,
    },
    priority: {
      type: String,
    },
    avatar: {
      type: String,
    },
    stateData: {
      type: Boolean,
    },
    step: [
      {
        type: mongoose.Types.ObjectId,
        ref: "steps",
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<iTaskData>("tasks", taskSchema);
