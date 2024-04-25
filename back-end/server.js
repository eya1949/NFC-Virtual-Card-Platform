import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routers/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;

const app = express();



app.use(
  cors({
    origin: "http://localhost:5173", // Corrected: Removed the trailing slash and quotes around the URL
    methods: ["GET", "POST"], // Specify the methods you want to allow
    credentials: true, // To allow cookies to be sent with requests
  })
);

//cookies
app.use(cookieParser());

//middlwares
app.use(express.json());
app.use(morgan("dev"));

//db config
connectDB();

// routes
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("welcome to TAMURT");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

// handle error

app.use((err,req,res,next) =>{
  const statusCode= err.statusCode || 500;
  const message =  err.message || 'Internal Server Error'
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

})
