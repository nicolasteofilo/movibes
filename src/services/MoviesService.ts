import { api, MostPopularMoviesAPI, TopRatedMoviesAPI } from "./api";
import MovieMapper from "./mappers/MoviesMapper";

import { theMoviesDbApiKey } from "../config/env";
import { APIError } from "../errors/APIError";

class MoviesService {
  async getPopularMovies() {
    try {
      const {
        data: { results },
      } = await api.get<MostPopularMoviesAPI>(
        `/moviee/popular?api_key=${theMoviesDbApiKey}&language=pt-BR`
      );

      const mappedMovies = results.map((movie) => MovieMapper.toDomain(movie));

      return mappedMovies;
    } catch (err: any) {
      throw new APIError(err.response?.data);
    }
  }

  async getTopRatedMovies() {
    try {
      const {
        data: { results },
      } = await api.get<TopRatedMoviesAPI>(
        `/movie/top_rated?api_key=${theMoviesDbApiKey}&language=pt-BR`
      );

      const mappedMovies = results.map((movie) => MovieMapper.toDomain(movie));

      return mappedMovies;
    } catch (err: any) {
      throw new APIError(err.response?.data);
    }
  }
}

export default new MoviesService();
