import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb dataBase ${db.connection.host}`);
  } catch (error) {
    console.log(`error in mongodb ${error}`);
  }
};

export default connectDB;