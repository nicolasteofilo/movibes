import { screen, render } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import { Sidebar } from ".";

describe('<Sidebar />', () => {
  it('should be render a logo', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    expect(screen.getByAltText(/Movibes/i));
  })

  it('should be render list of links', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    const homeLink = screen.getByLabelText(/Início/i);
    const filmsLink = screen.getByLabelText(/Filmes/i);

    expect(homeLink);
    expect(filmsLink);
  })
})
