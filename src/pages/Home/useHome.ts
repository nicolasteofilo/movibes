import { useEffect, useState } from "react";
import { MovieCardProps } from "../../components/MovieCard";
import MoviesService from "../../services/MoviesService";

export function useHome() {
  const [popularMovies, setPopularMovies] = useState<MovieCardProps[]>([]);

  useEffect(() => {
    (async () => {
      const popularMovies = await MoviesService.getPopularMovies();
      setPopularMovies(popularMovies);
    })();
  }, []);

  return {
    popularMovies,
  };
}
