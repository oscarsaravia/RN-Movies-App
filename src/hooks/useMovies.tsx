import { movieDB } from "../api/movieDB";
import { useEffect, useState } from "react";
import { Movie, MovieDBNowPlaying } from "../common/types";

export const useMovies = () => {

  const [ movies, setMovies ] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('top_rated');
    setMovies( resp.data.results );
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetching Now Playing movies
    getMovies();
  },[])

  return {
    movies,
    isLoading
  }
}
