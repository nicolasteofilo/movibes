import { screen } from "@testing-library/react";

import { MoviesSection } from ".";
import { MovieCardProps } from "../MovieCard";

import { renderWithTheme } from "../../utils/tests/helpers";

const movies: MovieCardProps[] = [
  {
    id: "1",
    name: "O poderoso chefão",
    coverUrl:
      "https://lumiere-a.akamaihd.net/v1/images/the_godfather_99f377a2.jpeg",
    rate: 8,
  },
];

describe("<MoviesSection />", () => {
  it("should be render heading and movies correctly", () => {
    renderWithTheme(<MoviesSection movies={movies} title="Popular" />);

    expect(
      screen.getByRole("heading", { name: /popular/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/O poderoso chefão/i)).toBeInTheDocument();
  });
});
