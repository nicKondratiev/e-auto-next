import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/User";
import { connectMongoDB } from "../../../../lib/mongodb";

connectMongoDB();

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { userId, banDuration } = await req.json();
    const user = await User.findById(userId);

    if (!userId) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    user.isBanned = true;
    user.banExpirationDate = new Date(
      Date.now() + parseInt(banDuration) * 24 * 60 * 60 * 1000
    );

    await user.save();

    return NextResponse.json({ message: "user banned successfully" });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: error.message }, { status: 404 });
  }
}
