import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../lib/mongodb";
import User from "../../models/User";

connectMongoDB();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const users = await User.find();

    return NextResponse.json({ message: "ok", users: users });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({
      name: error.name,
      message: error.message,
      error,
    });
  }
}
