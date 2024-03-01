import express from "express";
import { router } from "./routes/userRoutes";
import { connectToDb } from "./connectToDb";
import cors from "cors";

const app = express();
const PORT = 8080;

connectToDb();

app.use(cors());
app.use(express.json());
app.use("/user", router);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});
