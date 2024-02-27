"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
exports.userModel = mongoose_1.default.model("user", new Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
        type: String,
        enum: ["admin", "customer"],
    },
}));
