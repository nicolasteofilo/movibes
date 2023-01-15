import { useEffect, useState } from "react";
import { MovieCardProps } from "../../components/MovieCard";
import MoviesService from "../../services/MoviesService";

export function useHome() {
  const [popularMovies, setPopularMovies] = useState<MovieCardProps[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieCardProps[]>([]);
  const [hasErrorPopularMovies, setHasErrorPopularMovies] = useState(false);
  const [hasErrorTopRatedMovies, setHasErrorTopRatedMovies] = useState(false);
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] = useState(true);
  const [isLoadingTopRatedMovies, setIsLoadingTopRatedMovies] = useState(true);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((movies) => setPopularMovies(movies))
      .catch(() => setHasErrorPopularMovies(true))
      .finally(() => setIsLoadingPopularMovies(false));

    MoviesService.getTopRatedMovies()
      .then((movies) => setTopRatedMovies(movies))
      .catch(() => setHasErrorTopRatedMovies(true))
      .finally(() => setIsLoadingTopRatedMovies(false));
  }, []);

  return {
    popularMovies,
    topRatedMovies,
    isLoadingPopularMovies,
    isLoadingTopRatedMovies,
    hasErrorPopularMovies,
    hasErrorTopRatedMovies,
  };
}
