import { Request, Response } from "express";
import taskModel from "../model/taskModel";
import authModel from "../model/authModel";
import progressModel from "../model/progressModel";

export const createProgress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { task, priority } = req.body;

    const user = await authModel.findById(id);

    const tasked = await progressModel.create(req.body);

    res.status(201).json({
      message: "task created",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error Creating task",
    });
  }
};

export const readProgress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await progressModel.find();

    res.status(200).json({
      message: "task read",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error reading task",
    });
  }
};

export const readProgressDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await progressModel.findById(id).populate({
      path: "step",
      options: {
        sort: { createdAt: -1 },
      },
    });

    res.status(200).json({
      message: "task read",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error reading task",
    });
  }
};



export const deleteProgress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await progressModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "task deleted",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error deleting task",
    });
  }
};
