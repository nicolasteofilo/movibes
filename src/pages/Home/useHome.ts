import { useEffect, useState } from "react";
import { MovieCardProps } from "../../components/MovieCard";
import MoviesService from "../../services/MoviesService";

export function useHome() {
  const [popularMovies, setPopularMovies] = useState<MovieCardProps[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieCardProps[]>([]);
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] = useState(true);
  const [isLoadingtopRatedMovies, setIsLoadingtopRatedMovies] = useState(true);

  useEffect(() => {
    Promise.all([
      MoviesService.getPopularMovies(),
      MoviesService.getTopRatedMovies(),
    ])
      .then((values) => {
        setPopularMovies(values[0]);
        setTopRatedMovies(values[1]);
      })
      .finally(() => {
        setIsLoadingPopularMovies(false);
        setIsLoadingtopRatedMovies(false);
      });
  }, []);

  return {
    popularMovies,
    topRatedMovies,
    isLoadingPopularMovies,
    isLoadingtopRatedMovies,
  };
}
