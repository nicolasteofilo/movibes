import { Heading } from "../Heading";
import { MovieCard, MovieCardProps } from "../MovieCard";

import { Container, MoviesRow } from "./styles";

interface MoviesSectionProps {
  movies: MovieCardProps[];
  title: string;
  mB?: string;
  isLoading?: boolean;
  hasError?: boolean;
}

export function MoviesSection({
  title,
  movies,
  mB,
  isLoading = true,
  hasError = false,
}: MoviesSectionProps) {
  return (
    <Container marginBottom={mB}>
      <Heading title={title} />
      {isLoading && !hasError && <h1>Carregando...</h1>}
      <MoviesRow>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MoviesRow>
    </Container>
  );
}
