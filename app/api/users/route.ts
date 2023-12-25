import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/User";

export async function GET(req: NextRequest, res: NextResponse) {
  await connectMongoDB();

  try {
    const users = await User.find().select("username email role");

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "something went wrong." });
  }
}
