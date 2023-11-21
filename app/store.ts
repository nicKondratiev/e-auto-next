import { create } from "zustand";

export type InputFields = {
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

// type StringVoid = (val: string) => void;

type Store = {
  inputFields: InputFields;
  isFormSubmitted: boolean;
  setFormSubmitted: () => void;
  updateField: (fieldName: keyof InputFields, value: string) => void;
  reset: () => void;
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
  isFormSubmitted: false,
  setFormSubmitted: () => set({ isFormSubmitted: true }),

  updateField: (fieldName, value) =>
    set((state) => ({
      inputFields: {
        ...state.inputFields,
        [fieldName]: value,
      },
    })),

  reset: () => {
    set((state) => ({
      inputFields: Object.fromEntries(
        Object.keys(state.inputFields).map((key) => [key, ""])
      ) as InputFields,
      isFormSubmitted: false,
    }));
  },
}));

export default useStore;
