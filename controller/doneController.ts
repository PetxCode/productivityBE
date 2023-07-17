import { Request, Response } from "express";
import bcrypt from "bcrypt";
import doneModel from "../model/doneModel";

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
      data: user
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


