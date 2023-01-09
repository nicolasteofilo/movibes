import axios from "axios";
import { theMoviesDbApiKey } from "../config/env";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});
