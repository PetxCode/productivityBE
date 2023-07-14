import express, { Application, Request, Response } from "express";
import cors from "cors";
import auth from "./router/authRouter";
import task from "./router/taskRouter";
import step from "./router/stepRoute";

export const mainApp = (app: Application) => {
  app
    .use(cors())
    .use(express.json())
    .use("/api/v1/auth", auth)
    .use("/api/v1/task", task)
    .use("/api/v1/step", step)

    .get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Awesome and good to Go!!!!!",
        });
      } catch (error) {
        res.status(404).json({
          message: "Error Found",
        });
      }
    });
};
