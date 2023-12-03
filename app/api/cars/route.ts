import { NextRequest, NextResponse } from "next/server";

import { connectMongoDB } from "../../../lib/mongodb";

import CarListing from "../../../models/CarListing";

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
