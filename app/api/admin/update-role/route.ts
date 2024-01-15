import { NextResponse, NextRequest } from "next/server";
import User from "../../../../models/User";
import { connectMongoDB } from "../../../../lib/mongodb";

connectMongoDB();

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const updatedUserData = await req.json();

    console.log(updatedUserData);

    if (!updatedUserData) {
      return NextResponse.json({ message: "please provide valid data" });
    }

    const updateUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    if (!updateUser) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    } else {
      return NextResponse.json({ message: "updated user with id " + userId });
    }
  } catch (err) {
    const error = err as Error;
    console.error(error);
    return NextResponse.json({ err: error.message }, { status: 404 });
  }
}
