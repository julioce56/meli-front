import { Provider } from "react-redux";
import ItemsList from "./items-list";
import { store } from "@/app/core/store/store";
import { render } from "@testing-library/react";
import { itemsActions } from "../../store/items.slice";

describe("<ItemsList />", () => {
  beforeEach(() => {
    store.dispatch(itemsActions.setTextSearch("Meli"));
  });

  it("Title should be change", () => {
    const { container } = render(
      <Provider store={store}>
        <ItemsList />
      </Provider>
    );
    expect(container).not.toBeNull();
    expect(document.title).toEqual("Busqueda relacionada con Meli");
  });
});
