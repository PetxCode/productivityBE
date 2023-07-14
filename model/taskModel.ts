import mongoose from "mongoose";

export interface iTask {
  task?: string;
  avatar?: string;
  name?: string;
  priority?: string;
}

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
    priority: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iTaskData>("tasks", taskSchema);
