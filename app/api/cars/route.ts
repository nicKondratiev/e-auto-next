import { NextRequest, NextResponse } from "next/server";
import React from "react";
import mongoose from "mongoose";

export async function POST(request: NextRequest, response: NextResponse) {
  const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.z9i21le.mongodb.net/`;

  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("connected to db");
  } catch (err) {
    const error = err as Error;
    console.log("Something went wrong, " + error.message);
  }

  const data = await request.json();

  const {
    manu,
    model,
    location,
    custom,
    year,
    price,
    fuelType,
    wheel,
    transmission,
    mileage,
    img,
  } = data;

  const dataWithDate = {
    ...data,
    date: new Date(),
  };
}
