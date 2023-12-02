import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    console.log([username, email, password]);

    return NextResponse.json(
      { message: "User registered successfuly" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error occured" }, { status: 500 });
  }
}
