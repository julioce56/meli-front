import { RootState } from "@/app/core/store/store";
import { createSelector } from "@reduxjs/toolkit";
import { ResItem, ResItems } from "../domain/items";

export const itemsSelector = createSelector(
    (state: RootState) => state.items.items,
    (state: ResItems | undefined) => state
);

export const itemSelector = createSelector(
    (state: RootState) => state.items.item,
    (state: ResItem | undefined) => state
);