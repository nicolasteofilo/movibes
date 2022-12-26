import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";
import { Header } from ".";

const user = {
  name: "Nicolas", imageUrl: "https://avatars.githubusercontent.com/u/81480818?v=4"
}

describe('<Header />', () => {
  it('should be able render search input', () => {
    renderWithTheme(<Header user={user} />);

    expect(screen.getByPlaceholderText(/Pesquise por filmes, séries.../i))
  })

  it('should be able render the avatar image', () => {
    renderWithTheme(<Header user={user} />);

    expect(screen.getByRole('img', { name: /Nicolas/i }))
  })
})
