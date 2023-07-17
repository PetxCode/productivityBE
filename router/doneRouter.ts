import { Router } from "express";
import { doneCreateUser, readDoneUsers, readOneDoneUser } from "../controller/doneController";

const doneRouter = Router()

doneRouter.route("/read").get(readDoneUsers) 
doneRouter.route("/:id/read-one").get(readOneDoneUser)
doneRouter.route("/done-task").post(doneCreateUser)

export default doneRouter