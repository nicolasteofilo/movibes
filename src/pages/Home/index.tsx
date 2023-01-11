import { PageTemplate } from "../../templates/Page";
import { Heading } from "../../components/Heading";
import { MovieCard } from "../../components/MovieCard";

import { MoviesRow } from "./styles";
import { useHome } from "./useHome";

export function Home() {
  const { popularMovies } = useHome();

  return (
    <PageTemplate>
      <Heading title="Populares" />
      <MoviesRow>
        {popularMovies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </MoviesRow>
    </PageTemplate>
  );
}
