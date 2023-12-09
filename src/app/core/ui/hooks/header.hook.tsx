import { ItemsManagement } from "@/app/items/application/items.management";
import { ItemsService } from "@/app/items/infraestructure/items.service";
import { itemsActions } from "@/app/items/store/items.slice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";

export const HeaderHook = () => {
  const router = useRouter();
  const itemsManager = new ItemsManagement(new ItemsService());
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const item = useAppSelector((state) => state.items.item);
  const params = useSearchParams();

  useEffect(() => {
    setInputValue("");
  }, [item]);

  useEffect(() => {
    if (params.get("search")) {
      console.log(params.get("search"), "object");
      const query = params.get("search") as string;
      setInputValue(query);
      handleSearchItem(query);
    }
  }, [params]);

  const handleSearchItem = (query: string) => {
    if (query !== "") {
      (async () => {
        const resp = await itemsManager.getAllItems(query);
        dispatch(itemsActions.setItems(resp));
        router.push(`/items?search=${query}`);
      })();
    }
  };

  const goToHome = () => {
    console.log("object");
    setInputValue("");
    router.push("/");
  };

  return {
    inputValue,
    setInputValue,
    handleSearchItem,
    goToHome,
  };
};
