import { ResItem, ResItems } from "../domain/items";

export interface ItemsState {
    items?: ResItems,
    item?: ResItem
}

export const initialState: ItemsState = {}