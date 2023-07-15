import express, { Router } from "express";
import {
  createTask,
  deleteTask,
  readTask,
  updateStateTask,
} from "../controller/taskController";

const router: Router = express.Router();

router.route("/:id/create-task").post(createTask);

router.route("/view-tasks").get(readTask);
router.route("/:id/delete-task").delete(deleteTask);
router.route("/:id/update-one-task").patch(updateStateTask);

export default router;
