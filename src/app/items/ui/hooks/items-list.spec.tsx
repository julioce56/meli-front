import { renderHook } from "@testing-library/react";
import { ItemsListHook } from "./items-list.hook";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { itemsActions } from "../../store/items.slice";
import { ResItem, ResItems } from "../../domain/items";
import { store } from "@/app/core/store/store";

function getWrapper(store: Store<any>): React.FC {
  let wrapper = ({ children }: { children?: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return wrapper;
}

beforeEach(() => {
  global.fetch = jest.fn();
  store.dispatch(
    itemsActions.setItems({
      author: {
        lastname: "last name meli",
        name: "meli",
      },
      items: [
        {
          id: "MELI123",
          title: "Product",
          price: {
            amount: 100000,
            currency: "COP",
            decimals: 2,
          },
          picture: "https://test-picture.png",
          condition: "",
          free_shipping: false,
        },
      ],
      categories: [],
    })
  );
});
describe("ItemsListHook", () => {
  it("Check items response from store", () => {
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => ItemsListHook(), { wrapper });
    const { items }: { items: ResItems } = result.current;
    expect(items).not.toBeNull();
    expect(items.author.name).toEqual("meli");
  });

  it("Check items response from store", () => {
    const mockItem = {
      author: {
        name: "Julio",
        lastname: "Arroyave",
      },
      item: {
        id: "MLA1390022797",
        title: "Smart Tv Quint 32 Pulgadas Qt2-32android Hd Android",
        price: {
          currency: "ARS",
          amount: 197999,
          decimals: 0,
        },
        picture:
          "http://http2.mlstatic.com/D_964278-MLU72972408401_112023-O.jpg",
        condition: "new",
        free_shipping: true,
        description:
          "Con el Smart TV QT2-32ANDROID vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.\n\nSumergite en la pantalla\nSu resolución HD presenta imágenes con gran detalle y alta definición. Ahora todo lo que veas cobrará vida con brillo y colores más reales.",
        initial_quantity: 1828,
      },
    };
    jest.spyOn(global, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockItem),
      } as Response);
    });
    const wrapper = getWrapper(store);
    const { result } = renderHook(() => ItemsListHook(), { wrapper });
    const { handleGetDetailItem } = result.current;
    handleGetDetailItem("MLA1390022797", true);
    expect(global.fetch).toHaveBeenCalled();
  });
});
