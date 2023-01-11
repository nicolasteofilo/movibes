import { Heading } from "../Heading";
import { MovieCard, MovieCardProps } from "../MovieCard";

import { Container, MoviesRow } from "./styles";

interface MoviesSectionProps {
  movies: MovieCardProps[];
  title: string;
}

export function MoviesSection({ title, movies }: MoviesSectionProps) {
  return (
    <Container>
      <Heading title={title} />
      <MoviesRow>
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </MoviesRow>
    </Container>
  );
}
