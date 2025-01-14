// features/formDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDataList: [], // Array to store multiple form data objects
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formDataList.push(action.payload); // Add new form data to the array
    },
    updateFormData: (state, action) => {
      const { index, updatedData } = action.payload;
      state.formDataList[index] = updatedData; // Update specific form data by index
    },
    removeFormData: (state, action) => {
      state.formDataList.splice(action.payload, 1); // Remove specific form data by index
    },
  },
});

export const { addFormData, updateFormData, removeFormData } =
  formDataSlice.actions;
export default formDataSlice.reducer;
