import { movieDB } from "../api/movieDB";
import { Movie, Result } from "../common/types";
import { useEffect, useState } from "react";

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [ movies, setMovies ] = useState<Result[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<Movie>('top_rated');
    setMovies( resp.data.results );
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  },[])

  return {
    movies,
    isLoading
  }
}
