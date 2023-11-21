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

// import { create } from "zustand";

// type InputFields = {
//   manu: string;
//   model: string;
//   location: string;
//   custom: string;
//   year: string;
//   price: string;
//   fuelType: string;
//   wheel: string;
//   transmission: string;
//   mileage: string;
//   img: string;
// };

// // we create this types to avoid writing same types again and again
// type StringVoid = (val: string) => void;

// type Store = {
//   inputFields: InputFields;
//   isFormSubmitted: boolean;
//   setFormSubmitted: () => void;
//   addManu: StringVoid;
//   addModel: StringVoid;
//   addLocation: StringVoid;
//   addFuelType: StringVoid;
//   addYear: StringVoid;
//   addPrice: StringVoid;
//   addCustom: StringVoid;
//   addWheel: StringVoid;
//   addTransmission: StringVoid;
//   addMileage: StringVoid;
//   addImage: StringVoid;
//   reset: () => void;
// };

// const useStore = create<Store>((set) => ({
//   inputFields: {
//     manu: "",
//     model: "",
//     location: "",
//     custom: "",
//     year: "",
//     price: "",
//     fuelType: "",
//     wheel: "",
//     transmission: "",
//     mileage: "",
//     img: "",
//   },
//   isFormSubmitted: false,
//   setFormSubmitted: () => set({ isFormSubmitted: true }),
//   addManu: (manu) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         manu: manu,
//         model: "",
//       },
//     })),

//   addModel: (model) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         model: model,
//       },
//     })),

//   addLocation: (location) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         location: location,
//       },
//     })),

//   addCustom: (custom) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         custom: custom,
//       },
//     })),

//   addYear: (year) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         year: year,
//       },
//     })),

//   addPrice: (price) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         price: price,
//       },
//     })),

//   addFuelType: (fuelType) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         fuelType: fuelType,
//       },
//     })),

//   addWheel: (wheel) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         wheel: wheel,
//       },
//     })),

//   addTransmission: (transmission) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         transmission: transmission,
//       },
//     })),

//   addMileage: (mileage) =>
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         mileage: mileage,
//       },
//     })),

//   addImage: (img) => {
//     set((state) => ({
//       inputFields: {
//         ...state.inputFields,
//         img: img,
//       },
//     }));
//   },

//   reset: () => {
//     set((state) => ({
//       inputFields: {
//         manu: "",
//         model: "",
//         location: "",
//         custom: "",
//         year: "",
//         price: "",
//         fuelType: "",
//         wheel: "",
//         transmission: "",
//         mileage: "",
//         img: "",
//       },
//       isFormSubmitted: false,
//     }));
//   },
// }));

// export default useStore;
