import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithTheme } from "../../utils/tests/helpers";
import { Header } from ".";

const user = {
  name: "Nicolas", imageUrl: "https://avatars.githubusercontent.com/u/81480818?v=4"
}

describe('<Header />', () => {
  it('should be able render search input', () => {
    renderWithTheme(<Header user={user} />);

    const input = screen.getByPlaceholderText("Pesquise por filmes, séries...");
    const text = "Hello Word";

    userEvent.type(input, text).then(() => {
      expect(input).toHaveValue(text);
    })
  })

  it('should be able render the avatar image', () => {
    renderWithTheme(<Header user={user} />);

    expect(screen.getByRole('img', { name: /Nicolas/i }))
  })
})
