import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchImg } from "../../assets/icons/search";

import { renderWithTheme } from "../../utils/tests/helpers";
import { TextField } from ".";

describe("<TextField />", () => {
  it("should be able render with placeholder", () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument();
  });

  it("should be able render with icon", () => {
    renderWithTheme(<TextField icon={<SearchImg data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should be able render without icon", () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  it("changes its value when typing", async () => {
    const onChangeMock = jest.fn();
    renderWithTheme(<TextField onChange={onChangeMock} />);

    const input = screen.getByRole("textbox");
    const text = "Hello Word";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onChangeMock).toHaveBeenCalledTimes(text.length);
    });
  });
});
