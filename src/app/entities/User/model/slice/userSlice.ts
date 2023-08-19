import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const { actions } = userSlice;
export const { reducer } = userSlice;
