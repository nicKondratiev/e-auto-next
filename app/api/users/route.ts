import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import { connectMongoDB } from "../../../lib/mongodb";

connectMongoDB();

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = await new URL(req.url);
  const userId = searchParams.get("userId");

  let users;
  if (userId) {
    try {
      const user = await User.findById(userId);

      return NextResponse.json(user);
    } catch (err) {
      return NextResponse.json({
        message: "something wennt wrong",
        error: err,
        users: users,
      });
    }
  } else {
    try {
      users = await User.find()
        .select("username email role createdAt isBanned banExpirationDate _id")
        .sort({ createdAt: -1 });

      return NextResponse.json(users);
    } catch (err) {
      const error = err as Error;
      return NextResponse.json({
        error: error.message,
        message: "something went wrong.",
        users: users,
      });
    }
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    const userExists = await User.findById(userId);

    if (userExists) {
      await User.findByIdAndDelete(userId);

      return NextResponse.json(
        `user with id - ${userId} was deleted successfully`
      );
    } else {
      return NextResponse.json(`user with id - ${userId} doesn't exist`);
    }
  } catch (err) {
    return NextResponse.json(err);
  }
}
