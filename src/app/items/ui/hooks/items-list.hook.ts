import { useSelector } from "react-redux"
import { itemsSelector } from "../../store/items.selector"

export const ItemsListHook = () => {
    const items = useSelector(itemsSelector);

    return {
        items
    }
}