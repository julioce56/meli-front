import { ItemsManagement } from "@/app/items/application/items.management";
import { ItemsService } from "@/app/items/infraestructure/items.service";
import { itemsActions } from "@/app/items/store/items.slice";
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux";

export const HeaderHook = () => {
    const router = useRouter();
    const itemsManager = new ItemsManagement(new ItemsService);
    const dispatch = useDispatch();

    const handleSearchItem = () => {
        (
            async () => {
                const resp = await itemsManager.getAllItems("iphone");
                console.log(resp, 'repspsps');
                dispatch(itemsActions.setItems(resp));
                router.push('items?q=iphone');
            }
        )();
        
    }

    return {
        handleSearchItem
    }
}