import { Request, Response } from "express";
import bcrypt from "bcrypt";
import doneModel from "../model/doneModel";
import progressModel from "../model/progressModel";
import stepModel from "../model/stepModel";
import mongoose from "mongoose";

export const doneCreateUser = async (req: Request, res: Response) => {
  try {
    const { doneName, doneTask, doneAvatar, donePriority } = req.body;

    const user = await doneModel.create({
      doneName,
      doneTask,
      doneAvatar,
      donePriority,
    });

    res.status(201).json({
      message: " done created",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error Creating User",
    });
  }
};

export const readDoneUsers = async (req: Request, res: Response) => {
  try {
    const user = await doneModel.find();

    res.status(200).json({
      message: "reading users",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error Reading Users",
    });
  }
};

export const readOneDoneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await doneModel.findById(id);

    res.status(200).json({
      message: "reading one done user",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error Reading one Users",
    });
  }
};

export const deleteProgressStep = async (req: Request, res: Response) => {
  try {
    const { progressId, progressStepId } = req.params;
    const progress: any = await progressModel.findById(progressId);

    const removeStep = await stepModel.findById(progressStepId);

    const anything: any = await progress?.step?.pull(
      new mongoose.Types.ObjectId(removeStep!._id),
    );
    progress!.save();

    res.status(201).json({
      message: "removing",
    });
  } catch (error) {}
};