import { screen } from "@testing-library/react";

import { SearchImg } from "../../assets/icons/search";

import { renderWithTheme } from "../../utils/tests/helpers";
import { TextField } from ".";

describe('<TextField />', () => {
    it('should be able render with placeholder', () => {
      renderWithTheme(<TextField placeholder="hey you" />);

      expect(screen.getByPlaceholderText(/hey you/i)).toBeInTheDocument();
    })

    it('should be able render with icon', () => {
      renderWithTheme(<TextField icon={<SearchImg data-testid="icon" />} />);

       expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
})
