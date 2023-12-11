import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import CarListing from "../../../../models/CarListing";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const userId = await params?.userId;

  await connectMongoDB();

  try {
    const userExists = await User.findById(userId);

    if (!userExists) {
      return NextResponse.json({ error: "Wasn't able to find user." });
    }

    let carsData = await CarListing.find({ userId: userId });

    return NextResponse.json({ data: carsData });
  } catch (err) {
    return NextResponse.json({ error: "something went wrong." });
  }
}
