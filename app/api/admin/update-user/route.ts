import { NextResponse, NextRequest } from "next/server";
import User from "../../../../models/User";
import { connectMongoDB } from "../../../../lib/mongodb";

connectMongoDB();

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const { role, banDuration, isUnbanSelected } = await req.json();

    const user = await User.findById(userId);

    if (role) user.role = role;
    if (isUnbanSelected) {
      user.isBanned = false;
      user.banExpirationDate = null;
    } else if (banDuration) {
      user.banExpirationDate = new Date(
        Date.now() + parseInt(banDuration) * 24 * 60 * 60 * 1000
      );
      user.isBanned = true;
    }

    await user.save();

    return NextResponse.json({
      message: "user updated succsessfully",
      updatedUserData: user,
    });
  } catch (err) {
    const error = err as Error;
    console.error(error);
    return NextResponse.json({ err: error.message }, { status: 404 });
  }
}
