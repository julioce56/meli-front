import { ItemsManagement } from "@/app/items/application/items.management";
import { ItemsService } from "@/app/items/infraestructure/items.service";
import { itemsActions } from "@/app/items/store/items.slice";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/store";

export const HeaderHook = () => {
  const router = useRouter();
  const itemsManager = new ItemsManagement(new ItemsService());
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const item = useAppSelector((state) => state.items.item);
  const itemSearch = useAppSelector((state) => state.items.textSearch);
  const params = useSearchParams();

  useEffect(() => {
    setInputValue("");
  }, [item]);

  useEffect(() => {
    if (itemSearch) {
      setInputValue(itemSearch);
      goToSearchPath(itemSearch);
    }
  }, [itemSearch]);

  useEffect(() => {
    if (params.get("search")) {
      const query = params.get("search") as string;
      setInputValue(query);
      dispatch(itemsActions.setTextSearch(query));
      handleSearchItem(query);
    }
  }, [params]);

  const handleSearchItem = (query: string) => {
    if (query !== "") {
      (async () => {
        const resp = await itemsManager.getAllItems(query);
        dispatch(itemsActions.setItems(resp));
      })();
    }
  };

  const goToSearchPath = (query: string) => {
    if (query !== "") {
      router.push(`/items?search=${query}`);
    }
  };

  const handleButtonSearch = () => {
    dispatch(itemsActions.setTextSearch(inputValue));
    goToSearchPath(inputValue);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement> | undefined) => {
    if (e?.key === "Enter") {
      handleButtonSearch();
    }
  };

  const goToHome = () => {
    setInputValue("");
    router.push("/");
  };

  return {
    inputValue,
    setInputValue,
    handleSearchItem,
    goToHome,
    handleKeyDown,
    goToSearchPath,
    handleButtonSearch
  };
};
