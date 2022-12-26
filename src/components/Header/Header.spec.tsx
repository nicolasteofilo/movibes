import { screen } from "@testing-library/react";

import { SearchImg } from "../../assets/icons/search";

import { renderWithTheme } from "../../utils/tests/helpers";
import { Header } from ".";

describe('<Header />', () => {
  it('should be able render search input', () => {
    renderWithTheme(<Header />);

    expect(screen.getByPlaceholderText(/Pesquise por filmes, séries.../i))
  })
})
