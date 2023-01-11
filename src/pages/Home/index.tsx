import { useEffect, useState } from "react";

import { MovieCard, MovieCardProps } from "../../components/MovieCard";
import { PageTemplate } from "../../templates/Page";

import { MoviesRow } from "./styles";
import { Heading } from "../../components/Heading";
import MoviesService from "../../services/MoviesService";

export function Home() {
  const [popularMovies, setPopularMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const popularMovies = await MoviesService.getPopularMovies();
      setPopularMovies(popularMovies);
    })();
  }, []);

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
