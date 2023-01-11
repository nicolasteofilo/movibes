import { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { PageTemplate } from "../../templates/Page";

import { theMoviesDbApiKey } from "../../config/env";
import { api } from "../../services/api";
import { MoviesList, Movie } from "./types";

import { MoviesRow } from "./styles";

export function Home() {
  const [mostPopularMovies, setMostPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<MoviesList>(
        `/movie/popular?api_key=${theMoviesDbApiKey}&language=pt-BR`
      );
      setMostPopularMovies(data.results);
    })();
  }, []);

  return (
    <PageTemplate>
      <MoviesRow>
        {mostPopularMovies.map((movie) => {
          const name = movie.original_title;
          const rate = Number(movie.vote_average);
          const coverUrl = `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`;

          return (
            <div>
              <MovieCard name={name} rate={rate} coverUrl={coverUrl} />
            </div>
          );
        })}
      </MoviesRow>
    </PageTemplate>
  );
}
