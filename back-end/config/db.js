
    const mongoose = require('mongoose');

function connectToDB(){

try {
    mongoose
    .connect(process.env.URI);
    console.log("Connected To MongoDB .....")
} catch (error) {
    console.log("connection Failed To mongoDB",error)
}
}
module.exports = connectToDB;

/**
 * mongoose
        .connect(process.env.URI)
        .then(()=>{console.log("Connected To MongoDB .....");
        .catch((error)=>console.log("connection Failed To mongoDB",error));
 */