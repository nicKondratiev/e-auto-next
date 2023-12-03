import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.z9i21le.mongodb.net/`;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to db");
  } catch (err) {
    console.log("Something went wrong ", err.message);
  }
};
