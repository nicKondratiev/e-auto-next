import { create } from "zustand";

type InputFields = {
  manu: string;
  model: string;
  location: string;
  custom: string;
  year: string;
  price: string;
  fuelType: string;
  wheel: string;
  transmission: string;
  mileage: string;
  img: string;
};

// we create this types to avoid writing same types again and again
type StringVoid = (val: string) => void;

type Store = {
  inputFields: InputFields;
  addManu: StringVoid;
  addModel: StringVoid;
  addLocation: StringVoid;
  addFuelType: StringVoid;
  addYear: StringVoid;
  addPrice: StringVoid;
  addCustom: StringVoid;
  addWheel: StringVoid;
  addTransmission: StringVoid;
  addMileage: StringVoid;
  addImage: StringVoid;
};

const useStore = create<Store>((set) => ({
  inputFields: {
    manu: "",
    model: "",
    location: "",
    custom: "",
    year: "",
    price: "",
    fuelType: "",
    wheel: "",
    transmission: "",
    mileage: "",
    img: "",
  },
  addManu: (manu) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        manu: manu,
        model: "",
      },
    })),

  addModel: (model) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        model: model,
      },
    })),

  addLocation: (location) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        location: location,
      },
    })),

  addCustom: (custom) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        custom: custom,
      },
    })),

  addYear: (year) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        year: year,
      },
    })),

  addPrice: (price) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        price: price,
      },
    })),

  addFuelType: (fuelType) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        fuelType: fuelType,
      },
    })),

  addWheel: (wheel) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        wheel: wheel,
      },
    })),

  addTransmission: (transmission) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        transmission: transmission,
      },
    })),

  addMileage: (mileage) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        mileage: mileage,
      },
    })),

  addImage: (img) => {
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        img: img,
      },
    }));
  },
}));

export default useStore;
