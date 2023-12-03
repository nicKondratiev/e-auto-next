import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import { connectMongoDB } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  await connectMongoDB();

  const { username, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfuly" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error occured" }, { status: 500 });
  }
}
