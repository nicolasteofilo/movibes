import { MovieAPI } from "../api";
import { MovieCardProps } from "../../components/MovieCard";

class MovieMapper {
  toDomain(persistenceMovie: MovieAPI): MovieCardProps {
    return {
      name: persistenceMovie.original_title,
      coverUrl: `https://image.tmdb.org/t/p/w220_and_h330_face/${persistenceMovie.poster_path}`,
      rate: Number(persistenceMovie.vote_average),
    };
  }
}

export default new MovieMapper();
