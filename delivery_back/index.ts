import express from "express";
import { router } from "./routes/userRoutes";
import { connectToDb } from "./connectToDb";
import upload from "./middleware/multer";
import cloudinary from "./utils/cloudinary";
import { Image } from "./models/image";
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

app.post(
  "/upload",
  upload.single("image"),
  async (req: express.Request, res: express.Response) => {
    const uploadedFile = req.file;
    if (!uploadedFile) {
      res.status(400).json({ message: "Please upload file" });
      return;
    }

    try {
      const newImage = await cloudinary.uploader.upload(uploadedFile.path);
      console.log("newImage", newImage);
      const image = new Image({ imageURL: newImage.secure_url });
      await image.save();
      res
        .status(201)
        .json({ message: "Successfully uploaded image", image: image });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "bolsongvv ee" });
    }
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Express on Vercel");
});
app.listen(PORT, () => {
  console.log("application running at: http://localhost:" + PORT);
});
