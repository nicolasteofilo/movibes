import axios from "axios";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export interface MovieAPI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MostPopularMoviesAPI {
  page: number;
  results: MovieAPI[];
  total_pages: number;
  total_results: number;
}
