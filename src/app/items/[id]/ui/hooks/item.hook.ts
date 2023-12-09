import { useAppSelector } from "@/app/core/store/store";

export const ItemHook = () => {
    const item = useAppSelector((state) => state.items.item?.item);

    return {
        item
    }
}