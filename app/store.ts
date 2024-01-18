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

export type UpdatedUserData = {
  selectedDays: number | number[];
  resultDate: string;
  isUnbanSelected: boolean;
  updatedRole: "ADMIN" | "USER" | null;
};

type FieldName = keyof InputFields | keyof AuthFields | keyof UpdatedUserData;

type ValueType<T extends FieldName> = T extends keyof InputFields
  ? InputFields[T]
  : T extends keyof AuthFields
  ? AuthFields[T]
  : T extends keyof UpdatedUserData
  ? UpdatedUserData[T]
  : never;

type Store = {
  inputFields: InputFields;
  authFields: AuthFields;
  updatedUserData: UpdatedUserData;
  isFormSubmitted: boolean;
  setFormSubmitted: (val: boolean) => void;
  updateField: (
    fieldName: FieldName,
    value: ValueType<typeof fieldName>
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

  updatedUserData: {
    selectedDays: 0,
    resultDate: String(new Date().toLocaleDateString()),
    isUnbanSelected: false,
    updatedRole: null,
  },

  isFormSubmitted: false,
  setFormSubmitted: (val: boolean) => set({ isFormSubmitted: val }),

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
      } else if (Object.keys(state.updatedUserData).includes(fieldName)) {
        return {
          updatedUserData: {
            ...state.updatedUserData,
            [fieldName]: value,
          },
        };
      } else {
        return state;
      }
    }),

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

      const resetUpdatedUserData: UpdatedUserData = {
        selectedDays: 0,
        resultDate: String(new Date().toLocaleDateString()),
        isUnbanSelected: false,
        updatedRole: null,
      };

      return {
        inputFields: resetInputFields,
        authFields: resetAuthFields,
        updatedUserData: resetUpdatedUserData,
        isFormSubmitted: false,
      };
    }),
}));

export default useStore;
