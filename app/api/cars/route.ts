import { NextRequest, NextResponse } from "next/server";

import { connectMongoDB } from "../../../lib/mongodb";

import CarListing from "../../../models/CarListing";
import User from "../../../models/User";

connectMongoDB();

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const userExists = await User.findById(data.userId);

    if (userExists) {
      const document = await CarListing.create(data);

      console.log("added to db: ", document);

      return NextResponse.json({ message: "added to db" }, { status: 201 });
    } else
      return NextResponse.json(
        { message: "userId is not valid" },
        { status: 404 }
      );
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
  const page = Number(searchParams.get("page")) || 1;
  const limit = 3;
  const skip = (Number(page) - 1) * limit;

  try {
    const userExists = await User.findById(userId);

    if (!userExists) {
      return NextResponse.json({ error: "Wasn't able to find user." });
    }

    const totalDocuments = await CarListing.countDocuments({ userId: userId });

    let carsData = await CarListing.find({ userId: userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);

    return NextResponse.json({
      data: carsData,
      totalListings: totalDocuments,
      totalPages: Math.ceil(totalDocuments / limit),
    });
  } catch (err) {
    return NextResponse.json({ error: "something went wrong." });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const carId = await searchParams.get("carId");

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
