import { create } from "zustand";

type SearchParams = {
  manu: string;
  model: string;
  location: string;
  custom: string;
  year: string;
  price: string;
  fuelType: string;
};

// we create this types to avoid writing same types again and again
type StringVoid = (val: string) => void;
// type NumVoid = (val: number) => void;

type Store = {
  searchParams: SearchParams;
  addManu: StringVoid;
  addModel: StringVoid;
  addLocation: StringVoid;
  addFuelType: StringVoid;
  addYear: StringVoid;
  addPrice: StringVoid;
  addCustom: StringVoid;
};

const useStore = create<Store>((set) => ({
  searchParams: {
    manu: "",
    model: "",
    location: "",
    custom: "",
    year: "",
    price: "",
    fuelType: "",
  },
  addManu: (manu) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        manu: manu,
        model: "",
      },
    })),

  addModel: (model) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        model: model,
      },
    })),

  addLocation: (location) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        location: location,
      },
    })),

  addCustom: (custom) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        custom: custom,
      },
    })),

  addYear: (year) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        year: year,
      },
    })),

  addPrice: (price) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        price: price,
      },
    })),

  addFuelType: (fuelType) =>
    set((state) => ({
      searchParams: {
        ...state.searchParams,
        fuelType: fuelType,
      },
    })),
}));

export default useStore;
