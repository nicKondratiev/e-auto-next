import { NextRequest, NextResponse } from "next/server";

import { connectMongoDB } from "../../../lib/mongodb";

import CarListing from "../../../models/CarListing";
import User from "../../../models/User";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest, response: NextResponse) {
  await connectMongoDB();

  const data = await request.json();

  const dataWithDate = {
    ...data,
    date: new Date(),
  };

  try {
    await CarListing.create(dataWithDate);
    console.log("added to db: ", { dataWithDate });
    return NextResponse.json({ message: "added to db" }, { status: 201 });
  } catch (err) {
    console.log("something went wrong: ", err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 404 }
    );
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  const { searchParams } = new URL(request.url);

  const userId = searchParams.get("userId");
  const page = Number(searchParams.get("page"));
  const limit = 3;
  const skip = (Number(page) - 1) * limit;

  console.log(userId);

  console.log(page);

  await connectMongoDB();

  try {
    const userExists = await User.findById(userId);

    if (!userExists) {
      return NextResponse.json({ error: "Wasn't able to find user." });
    }

    let carsData = await CarListing.find({ userId: userId })
      .limit(limit)
      .skip(skip);

    return NextResponse.json({ data: carsData });
  } catch (err) {
    return NextResponse.json({ error: "something went wrong." });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const carId = await searchParams.get("carId");

  await connectMongoDB();

  try {
    const carExists = await CarListing.findById(carId);

    if (!carExists) {
      return NextResponse.json({
        id: `car with id - ${carId}, doesn't exist`,
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
