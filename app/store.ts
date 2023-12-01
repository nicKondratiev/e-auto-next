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

export type AuthFields = {
  email: string;
  username: string;
  password: string;
};

type Store = {
  inputFields: InputFields;
  authFields: AuthFields;
  isFormSubmitted: boolean;
  setFormSubmitted: () => void;
  updateField: (
    fieldName: keyof InputFields | keyof AuthFields,
    value: string
  ) => void;
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

  authFields: {
    email: "",
    username: "",
    password: "",
  },

  isFormSubmitted: false,
  setFormSubmitted: () => set({ isFormSubmitted: true }),

  updateField: (fieldName, value) =>
    set((state) => {
      if (Object.keys(state.inputFields).includes(fieldName)) {
        return {
          inputFields: {
            ...state.inputFields,
            [fieldName]: value,
          },
        };
      } else if (Object.keys(state.authFields).includes(fieldName)) {
        return {
          authFields: {
            ...state.authFields,
            [fieldName]: value,
          },
        };
      } else {
        return state;
      }
    }),

  // updateField: (fieldName, value) =>
  //   set((state) => ({
  //     inputFields: {
  //       ...state.inputFields,
  //       [fieldName]: value,
  //     },
  //   })),

  reset: () =>
    set((state) => {
      const resetInputFields = Object.fromEntries(
        Object.keys(state.inputFields).map((key) => [key, ""])
      ) as InputFields;

      const resetAuthFields: AuthFields = {
        email: "",
        username: "",
        password: "",
      };

      return {
        inputFields: resetInputFields,
        authFields: resetAuthFields,
        isFormSubmitted: false,
      };
    }),

  // reset: () => {
  //   set((state) => ({
  //     inputFields: Object.fromEntries(
  //       Object.keys(state.inputFields).map((key) => [key, ""])
  //     ) as InputFields,
  //     isFormSubmitted: false,
  //   }));
  // },
}));

export default useStore;
