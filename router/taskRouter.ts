import express, { Router } from "express";
import {
  createTask,
  deleteTask,
  readOneTask,
  readTask,
  updateOneTask,
  updateStateTask,
} from "../controller/taskController";

const router: Router = express.Router();

router.route("/:id/create-task").post(createTask);
router.route("/:id/update-task-step").patch(updateOneTask);

router.route("/view-tasks").get(readTask);
router.route("/:id/delete-task").delete(deleteTask);
router.route("/:id/update-one-task").patch(updateStateTask);
router.route("/:id/view-one-task").get(readOneTask);

export default router;
