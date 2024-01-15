import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/User";
import { connectMongoDB } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

connectMongoDB();

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const userExists = await User.findOne({ username: username });

    if (!userExists) {
      await User.create({ username, email, password: hashedPassword });

      return NextResponse.json(
        { message: "User registered successfuly" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ err: "user already exists" });
    }
  } catch (err) {
    return NextResponse.json({ message: "Error occured" }, { status: 500 });
  }
}
