import express, { Router } from "express";
import {
  createProgress,
  deleteProgress,
  readProgress,
} from "../controller/progressController";

const router: Router = express.Router();

router.route("/:id/create-progress").post(createProgress);

router.route("/view-progress").get(readProgress);
router.route("/:id/delete-progress").delete(deleteProgress);

export default router;
