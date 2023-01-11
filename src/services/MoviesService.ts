import { api, MostPopularMoviesAPI } from "./api";
import MovieMapper from "./mappers/MovieMapper";

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
}

export default new MoviesService();
