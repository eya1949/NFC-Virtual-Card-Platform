const express = require("express");
const logger = require("./middlewares/logger.js");
require("dotenv").config();
const { notfound, errorHandler } = require("./middlewares/errors.js");
const connectToDB = require("./config/db.js");


/**
 * @description Init app
 */
const app = express();

//connection to database 
connectToDB();

// create server in express js :
// create server in express js :
const port = process.env.PORT || 8000;
app.listen(port, () => {console.log(`server is running in ${process.env.NODE_ENV} on port http://localhost:${port}`);})

//Apply Middlewares 
app.use(express.json());//apply middlewares : had code k7wal json l code js \ chage the json to ----> js 
app.use(logger)


//Routes 
app.use("/api/auth",require("./src/router/auth.js"));
app.use("/api/users",require("./src/router/users.js"));


// Error Handler Middleware
app.use(notfound)
app.use(errorHandler)