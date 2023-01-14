import { Spinner } from ".";
import theme from "../../styles/theme";
import { renderWithTheme } from "../../utils/tests/helpers";

describe("<Spinner />", () => {
  it("should be render Spinner correctly", () => {
    const { container } = renderWithTheme(<Spinner />);

    expect(container.getElementsByClassName("loader")[0]).toBeInTheDocument();
    expect(container.getElementsByClassName("loader")[0]).toHaveStyle({
      width: "48px",
      height: "48px",
      border: `5px solid ${theme.colors.gray[500]}`,
      "border-bottom-color": theme.colors.green,
    });
  });
});
