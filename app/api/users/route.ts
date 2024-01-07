import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/User";

connectMongoDB();

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (userId) {
    try {
      const user = await User.findById(userId);

      return NextResponse.json(user);
    } catch (err) {
      return NextResponse.json({
        message: "something wennt wrong",
        error: err,
      });
    }
  } else {
    try {
      const users = await User.find()
        .select("username email role createdAt isBanned banExpirationDate _id")
        .sort({ createdAt: -1 });

      return NextResponse.json(users);
    } catch (err) {
      return NextResponse.json({ error: "something went wrong." });
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
