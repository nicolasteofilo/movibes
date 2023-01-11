import { useEffect, useState } from "react";

import { MovieCard, MovieCardProps } from "../../components/MovieCard";
import { PageTemplate } from "../../templates/Page";

import { theMoviesDbApiKey } from "../../config/env";
import { api, MostPopularMoviesAPI, MovieAPI } from "../../services/api";

import { MoviesRow } from "./styles";
import { Heading } from "../../components/Heading";

export function Home() {
  const [mostPopularMovies, setMostPopularMovies] = useState<MovieCardProps[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const { data } = await api.get<MostPopularMoviesAPI>(
        `/movie/popular?api_key=${theMoviesDbApiKey}&language=pt-BR`
      );
      const mappedMovies = data.results.map((movie: MovieAPI) => ({
        name: movie.original_title,
        rate: Number(movie.vote_average),
        coverUrl: `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`,
      })) as [];
      setMostPopularMovies(mappedMovies);
    })();
  }, []);

  return (
    <PageTemplate>
      <Heading title="Populares" />
      <MoviesRow>
        {mostPopularMovies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </MoviesRow>
    </PageTemplate>
  );
}
