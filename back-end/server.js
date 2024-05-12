import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routers/authRoutes.js";
import userRoutes from "./src/routers/userRoutes.js";
import productRoutes from "./src/routers/productRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

//configuration
dotenv.config();
const app = express();

// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"], 
    credentials: true, 
  })
);

//cookies
app.use(cookieParser());

//middlwares
app.use(express.json());
app.use(morgan("common"));
// app.use(morgan("dev"));

//db config
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)

app.get("/", (req, res) => {
  res.send("welcome to TAMURT");
});

// handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
