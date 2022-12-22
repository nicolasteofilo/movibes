import { screen, render } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import theme from "../../styles/theme";

import { Sidebar } from ".";

describe('<Sidebar />', () => {
  it('should render a logo', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    expect(screen.getByAltText(/Movibes/i));
  })

  it('should render list of links', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    const homeLink = screen.getByRole('link', { name: /Início/ });
    const filmsLink = screen.getByRole('link', { name: /Filmes/ });

    expect(homeLink);
    expect(filmsLink);
  })

  it('should render link on/off', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    const homeLink = screen.getByRole('link', {name: /Início/});
    const filmsLink = screen.getByRole('link', {name: /Filmes/});

    expect(homeLink).toHaveStyle({
      color: theme.colors.green,
    })
    expect(filmsLink).toHaveStyle({
      color: theme.colors.gray,
    })
  })
})
