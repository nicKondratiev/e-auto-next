import mongoose, { Schema } from "mongoose";

const RequiredString = {
  type: String,
  required: true,
};

const CarListingSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  manu: RequiredString,
  model: RequiredString,
  location: RequiredString,
  custom: RequiredString,
  year: RequiredString,
  price: RequiredString,
  fuelType: RequiredString,
  wheel: RequiredString,
  transmission: RequiredString,
  mileage: RequiredString,
  img: RequiredString,
});

const CarListing =
  mongoose.models.CarListing || mongoose.model("CarListing", CarListingSchema);

export default CarListing;
