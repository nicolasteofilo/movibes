import { motion } from "framer-motion";

import { Heading } from "../Heading";
import { Spinner } from "../Spinner";
import { MovieCard, MovieCardProps } from "../MovieCard";

import { Container, LoadingContainer, MoviesContainer } from "./styles";

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
        <MoviesContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </MoviesContainer>
      )}
    </Container>
  );
}
