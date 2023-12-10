import { useAppSelector } from "@/app/core/store/store";
import { toast } from "sonner";

export const ItemHook = () => {
  const item = useAppSelector((state) => state.items.item?.item);

  const handleButton = () => {
    toast.success("Producto agregado!");
  }

  return {
    item,
    handleButton
  };
};
