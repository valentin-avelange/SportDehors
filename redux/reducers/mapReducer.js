import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  center: [49.230692, 3.631686],
  markers: [
    {
      coords: [49.1, 3.6760529],
      type: "football",
    },
    {
      coords: [49.2, 3.6760529],
      type: "basketball",
    },
    {
      coords: [49.3, 3.6760529],
      type: "tennis",
    },
    {
      coords: [49.4, 3.6760529],
      type: "cluster",
      number: 123,
    },
    {
      coords: [49.41, 3.6760529],
      type: "cluster",
      number: 15,
    },
    {
      coords: [49.42, 3.6760529],
      type: "cluster",
      number: 99,
    },
  ],
  currentLocation: null,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setCenter: (state, action) => {
      state.center = action.payload;
    },
  },
});

export const { setCenter } = mapSlice.actions;

export default mapSlice.reducer;
