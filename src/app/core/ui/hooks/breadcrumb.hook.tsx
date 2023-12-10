import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";
import { itemsActions } from "@/app/items/store/items.slice";

export const BreadCrumbHook = () => {
  const { categories } = useAppSelector((state) => state.items.items);
  const dispatch = useDispatch();

  const handleSelectItem = (itemName: string) => {
    dispatch(itemsActions.setTextSearch(itemName));
  };

  return {
    categories,
    handleSelectItem,
  };
};
