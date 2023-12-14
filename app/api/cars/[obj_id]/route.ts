import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import CarListing from "../../../../models/CarListing";
import { connectMongoDB } from "../../../../lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { params: { obj_id: string } }
) {
  const userId = await params?.obj_id;

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { obj_id: string } }
) {
  const carId = await params?.obj_id;

  await connectMongoDB();

  try {
    const carExists = await CarListing.findById(carId);

    if (!carExists) {
      return NextResponse.json({
        // error: "car with this id doesn't exist",
        id: `hey see me fall ${carId}`,
      });
    }

    await CarListing.findByIdAndDelete(carId);

    return NextResponse.json({
      message: `car with id - ${carId}, was deleted successfully`,
    });
  } catch (err) {
    return NextResponse.json({ error: "something went wrong." });
  }
}
