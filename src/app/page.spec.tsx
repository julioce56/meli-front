import { render, waitFor, screen } from "@testing-library/react";
import InitialPage from "./page";

describe("<InitialPage />", () => {
  it("Check image title", () => {
    const component = render(<InitialPage />);
    const title = component.getByText("¡Descubre que tenemos para tí!");
    expect(title).toBeInTheDocument();
  });

  it("Check image is rendered", async () => {
    render(<InitialPage />);
    const startSearchImg = screen.queryByTestId("startSearchImg");
    waitFor(() => expect(startSearchImg).toHaveAttribute("src"));
  });
});
