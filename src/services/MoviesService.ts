import { api, MostPopularMoviesAPI } from "./api";
import MovieMapper from "./mappers/MoviesMapper";

import { theMoviesDbApiKey } from "../config/env";

class MoviesService {
  async getPopularMovies() {
    const { data } = await api.get<MostPopularMoviesAPI>(
      `/movie/popular?api_key=${theMoviesDbApiKey}&language=pt-BR`
    );

    const mappedMovies = data.results.map((movie) =>
      MovieMapper.toDomain(movie)
    );

    return mappedMovies;
  }

  async getTopRatedMovies() {
    const { data } = await api.get<MostPopularMoviesAPI>(
      `/movie/top_rated?api_key=${theMoviesDbApiKey}&language=pt-BR`
    );

    const mappedMovies = data.results.map((movie) =>
      MovieMapper.toDomain(movie)
    );

    return mappedMovies;
  }
}

export default new MoviesService();
