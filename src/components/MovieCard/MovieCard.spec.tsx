import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/helpers";
import { MovieCard, MovieCardProps } from ".";

const film: MovieCardProps = {
  id: "2",
  name: "Top Gun: Maverick",
  rate: 8.4,
  coverUrl:
    "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Top_Gun_Maverick.jpg/250px-Top_Gun_Maverick.jpg",
};

describe("<MovieCard />", () => {
  it("should be render a card for the movie", () => {
    renderWithTheme(<MovieCard {...film} />);

    expect(screen.getByLabelText(/Top Gun: Maverick/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/estrela/i)).toBeInTheDocument();
    expect(screen.getByText(/8.4/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Top Gun: Maverick/i)).toHaveStyle({
      "background-image": `url("${film.coverUrl}")`,
    });
  });
});
