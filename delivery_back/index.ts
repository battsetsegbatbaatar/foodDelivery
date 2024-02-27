import express from "express";
import { userRouter } from "./routes/userRoutes";
import { connectToDb } from "./connectToDb";

const app = express();
const PORT = 8080;

connectToDb();
app.use(userRouter);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});
