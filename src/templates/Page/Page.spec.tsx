import { screen } from "@testing-library/react";
import { PageTemplate } from ".";

import { renderWithTheme } from "../../utils/tests/helpers";

jest.mock('../../components/Sidebar', () => {
  return {
    __esModule: true,
    Sidebar: function Mock() {
      return <div data-testid="mock sidebar"></div>
    }
  }
})

jest.mock('../../components/Header', () => {
  return {
    __esModule: true,
    Header: function Mock() {
      return <div data-testid="mock header"></div>
    }
  }
})

describe("<Page />", () => {
  it('should render <Page /> with correct data', () => {
    renderWithTheme(
      <PageTemplate>
        <h1>My Page</h1>
      </PageTemplate>
    );

    expect(screen.getByTestId('mock sidebar'));
    expect(screen.getByTestId('mock header'));
    expect(screen.getByRole('heading', {name: /My Page/i }));
  })
});
