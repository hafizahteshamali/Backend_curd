import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { UserRoutes } from "./Routes/UserRoutes.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Backend mai khush aamdeed");
});

app.use("/users", UserRoutes);

const dbConnecting = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database Connected Successfully..");
  } catch (error) {
    console.log("Database not Connected", error);
  }
};

dbConnecting();

app.listen(PORT, () => {
  console.log("Ahtesham ka Backend chal para");
});
