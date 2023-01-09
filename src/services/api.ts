import axios from "axios";

export const api = axios.create({
  baseURL: `https://imdb-api.com/pt-BR/API/`
})
