import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const bannedUsers = await User.find({ banned: true });

    console.log(bannedUsers);

    const updatedUsers = await User.updateMany(
      { banned: true },
      { $set: { banned: false } }
    );

    if (updatedUsers.acknowledged) {
      return NextResponse.json({
        message: "successfully updated all banned users to unbanned",
      });
    } else {
      return NextResponse.json({ message: "failed to update users" });
    }
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: error.message, err: error });
  }
}
