import { useAppSelector } from "../../store/store";

export const BreadCrumbHook = () => {
    const { categories } = useAppSelector((state) => state.items.items);

    return {
        categories
    }
}