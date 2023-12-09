import { FC, useEffect } from "react";
import { ItemsListHook } from "../hooks/items-list.hook";

const ItemsList: FC = () => {

    const { items } = ItemsListHook();

    useEffect(() => {
        console.log(items, 'itemsFormstore={store}');
    }, []);
    return (
        <>List</>
    )
}

export default ItemsList;