"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const connectToDb_1 = require("./connectToDb");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
(0, connectToDb_1.connectToDb)();
app.use(userRoutes_1.userRouter);
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log("application running at: http://localhost:" + PORT);
});
