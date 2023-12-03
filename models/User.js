import mongoose from "mongoose";

const RequiredString = {
  type: String,
  required: true,
};

const UserModel = new mongoose.Schema(
  {
    username: RequiredString,
    email: RequiredString,
    password: RequiredString,
  },
  { timeStamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserModel);

export default User;
