import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Heading />", () => {
  it("should be render with correct data", () => {
    renderWithTheme(<Heading title="I'm heading" />);
    expect(
      screen.getByRole("heading", { name: /I'm heading/ })
    ).toBeInTheDocument();
  });
});
