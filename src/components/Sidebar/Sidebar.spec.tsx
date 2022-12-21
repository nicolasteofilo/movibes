import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../utils/tests/helpers";

import { Sidebar } from ".";

describe('<Sidebar />', () => {
  it('should be render a logo', () => {
    renderWithTheme(<Sidebar />);

    expect(screen.getByAltText(/Movibes/i));
  })
})
