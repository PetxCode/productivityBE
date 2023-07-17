"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProgressStep = exports.readOneDoneUser = exports.readDoneUsers = exports.doneCreateUser = void 0;
const doneModel_1 = __importDefault(require("../model/doneModel"));
const progressModel_1 = __importDefault(require("../model/progressModel"));
const stepModel_1 = __importDefault(require("../model/stepModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const doneCreateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { doneName, doneTask, doneAvatar, donePriority } = req.body;
        const user = yield doneModel_1.default.create(req.body);
        res.status(201).json({
            message: " done created",
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error Creating User",
        });
    }
});
exports.doneCreateUser = doneCreateUser;
const readDoneUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield doneModel_1.default.find();
        res.status(200).json({
            message: "reading users",
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error Reading Users",
        });
    }
});
exports.readDoneUsers = readDoneUsers;
const readOneDoneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield doneModel_1.default.findById(id);
        res.status(200).json({
            message: "reading one done user",
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Error Reading one Users",
        });
    }
});
exports.readOneDoneUser = readOneDoneUser;
const deleteProgressStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { progressId, progressStepId } = req.params;
        const progress = yield progressModel_1.default.findById(progressId);
        const removeStep = yield stepModel_1.default.findById(progressStepId);
        const anything = yield ((_a = progress === null || progress === void 0 ? void 0 : progress.step) === null || _a === void 0 ? void 0 : _a.pull(new mongoose_1.default.Types.ObjectId(removeStep._id)));
        progress.save();
        res.status(201).json({
            message: "removing",
        });
    }
    catch (error) { }
});
exports.deleteProgressStep = deleteProgressStep;
