import { Heading } from "../Heading";
import { Spinner } from "../Spinner";
import { MovieCard, MovieCardProps } from "../MovieCard";

import { Container, LoadingContainer, MoviesRow } from "./styles";

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
      <LoadingContainer>
        {isLoading && !hasError && <Spinner />}
      </LoadingContainer>
      {!isLoading && (
        <MoviesRow>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </MoviesRow>
      )}
    </Container>
  );
}
