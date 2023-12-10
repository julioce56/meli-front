import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./items.state";
import { ResItem, ResItems } from "../domain/items";

export const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, { payload }: PayloadAction<ResItems>) => {
      state.items = payload;
    },
    setItem: (state, { payload }: PayloadAction<ResItem>) => {
      state.item = payload;
    },
    setTextSearch: (state, { payload }: PayloadAction<string>) => {
      state.textSearch = payload;
    },
  },
});

export const itemsActions = ItemsSlice.actions;
export const itemsReducer = ItemsSlice.reducer;
