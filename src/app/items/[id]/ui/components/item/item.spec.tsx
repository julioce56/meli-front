import { render } from "@testing-library/react";
import Item from "./item";
import { Provider } from "react-redux";
import { store } from "@/app/core/store/store";

describe("<Item />", () => {
  const ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ENV };
  });

  afterAll(() => {
    process.env = ENV;
  });

  it('Component should be render"', () => {
    process.env.API_BASE_PATH = "http://localhost:4000/api";
    const { container } = render(
      <Provider store={store}>
        <Item />
      </Provider>
    );
    expect(container).not.toBeNull();
  });
});
