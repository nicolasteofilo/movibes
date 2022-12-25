import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { renderWithTheme } from "../../utils/tests/helpers";

import theme from "../../styles/theme";

import { Sidebar } from ".";


const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}

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
    });
    expect(filmsLink).toHaveStyle({
      color: theme.colors.gray,
    });
  })
  
  it('ensure color change on icons', async () => {
    renderWithTheme(<Sidebar currentLocation="/filmes" />);
   
    const filmsLink = screen.getByRole('link', {name: /Filmes/});

    expect(filmsLink).toHaveStyle({
      color: theme.colors.green
    });
  })

  it('should render logout button', () => {
    renderWithTheme(<Sidebar currentLocation="/" />);

    const logoutButtom = screen.getByRole('button', { name: /Sair/i });

    expect(logoutButtom);
  })

  it('should render correctly in small devices', async  () => {
      renderWithTheme(<Sidebar currentLocation="/" />);
      await act(async () => {
        resizeWindow(500, 300);
      })

      const logoutButtom = screen.getByRole('button', { name: /Sair/i });
      const homeLink = screen.getByRole('link', {name: /Início/});
      const filmsLink = screen.getByRole('link', {name: /Filmes/});

      expect(logoutButtom);
      expect(homeLink);
      expect(filmsLink);
  })
})
