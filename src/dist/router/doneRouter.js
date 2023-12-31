"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doneController_1 = require("../controller/doneController");
const doneRouter = (0, express_1.Router)();
doneRouter.route("/read").get(doneController_1.readDoneUsers);
doneRouter.route("/:id/read-one").get(doneController_1.readOneDoneUser);
doneRouter.route("/done-task").post(doneController_1.doneCreateUser);
doneRouter
    .route("/:progressId/:progressStepId/delete-progress-step")
    .delete(doneController_1.deleteProgressStep);
exports.default = doneRouter;
