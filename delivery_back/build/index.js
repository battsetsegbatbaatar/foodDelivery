"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const connectToDb_1 = require("./connectToDb");
const app = (0, express_1.default)();
const PORT = 8080;
(0, connectToDb_1.connectToDb)();
app.use(userRoutes_1.userRouter);
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log("application running at: http://localhost:" + PORT);
});
