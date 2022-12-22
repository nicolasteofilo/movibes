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

    const homeLink = screen.getByRole('link', { name: /Início/ });
    const filmsLink = screen.getByRole('link', { name: /Filmes/ });

    expect(homeLink);
    expect(filmsLink);
  })
})
