import mongoose from "mongoose";
import {  iDone } from "../utils/interfaces";

interface iDoneData extends iDone, mongoose.Document {}

const doneSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iDoneData>("dones", doneSchema);
