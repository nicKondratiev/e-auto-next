import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGO_URI;

  try {
    await mongoose
      .connect(MONGODB_URI)
      .then(() => console.log("connected to db"));
  } catch (err) {
    console.log("Something went wrong ", err.message);
  }
};
