import axios from "axios";

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'f6e3150caf0607e5fd9e13a3e4542ad8',
    language: 'es-ES'
  }
});
