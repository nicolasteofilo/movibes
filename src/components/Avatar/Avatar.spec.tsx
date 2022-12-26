import { screen } from "@testing-library/react";
import { Avatar } from ".";

import { renderWithTheme } from "../../utils/tests/helpers";

describe('<Avatar />', () => {
  it('should be able render profile image', () => {
    renderWithTheme(<Avatar name="Nicolas Teófilo" imageUrl="https://github.com/nicolasteofilo.png" />);

    expect(screen.getByRole('img', { name: /Nicolas Teófilo/i }));
  })
})
