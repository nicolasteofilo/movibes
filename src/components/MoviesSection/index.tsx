import { Heading } from "../Heading";
import { MovieCard, MovieCardProps } from "../MovieCard";

import { Container, MoviesRow } from "./styles";

interface MoviesSectionProps {
  movies: MovieCardProps[];
  title: string;
  mB?: string;
}

export function MoviesSection({ title, movies, mB }: MoviesSectionProps) {
  return (
    <Container marginBottom={mB}>
      <Heading title={title} />
      <MoviesRow>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MoviesRow>
    </Container>
  );
}
