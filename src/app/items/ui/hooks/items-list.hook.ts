import { useAppSelector } from "@/app/core/store/store";
import { ResItems } from "../../domain/items";
import { useRouter } from "next/navigation";
import { ItemsManagement } from "../../application/items.management";
import { ItemsService } from "../../infraestructure/items.service";
import { useDispatch } from "react-redux";
import { itemsActions } from "../../store/items.slice";

export const ItemsListHook = () => {
  const router = useRouter();
  const itemsManager = new ItemsManagement(new ItemsService());
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const currentInputSearch = useAppSelector((state) => state.items.textSearch);

  const getOnlyFourItems = (): ResItems => {
    const aux = {
      ...items,
      items: items.items.slice(0, 4),
    };
    return aux;
  };

  const handleGetDetailItem = (id: string, noRedirect?: boolean) => {
    (async () => {
      const resp = await itemsManager.getItemDetail(id);
      dispatch(itemsActions.setItem(resp));
      if (!noRedirect) {
        router.push(`items/${id}`);
      }
    })();
  };

  return {
    items,
    getOnlyFourItems,
    handleGetDetailItem,
    currentInputSearch
  };
};
