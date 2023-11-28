import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

import CarListing from "../../../models/CarListing";

export async function POST(request: NextRequest, response: NextResponse) {
  const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.z9i21le.mongodb.net/`;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to db");
  } catch (err) {
    const error = err as Error;
    console.log("Something went wrong, " + error.message);
  }

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
