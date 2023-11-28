import mongoose from "mongoose";

const RequiredString = {
  type: String,
  required: true,
};

const CarListingSchema = new mongoose.Schema({
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
