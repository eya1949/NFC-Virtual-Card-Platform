import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routers/authRoutes.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

//middlwares
app.use(express.json());
app.use(morgan("dev"));

//db config
connectDB();

// routes
app.use("/api/V1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("welcome to TAMURT");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
