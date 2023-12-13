import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";

import CarListing from "../../../../models/CarListing";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { carId: string } }
) {
  const { carId } = request.body;

  await connectMongoDB();

  try {
    const carExists = CarListing.findById(carId);

    if (!carExists) {
      return NextResponse.json({ error: "car with this id doesn't exist" });
    }

    await CarListing.findByIdAndDelete(carId);

    return NextResponse.json({
      message: `car with id - ${carId}, was deleted successfully`,
    });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
