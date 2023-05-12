import { useState, useEffect, useCallback } from 'react';

import API from 'services/api';
import MovieList from 'components/MovieList/MovieList';
import PageTitle from 'components/PageTitle/PageTitle';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const isLoaded = movies !== null;


  const hadleFetchPopular = useCallback(async () => {
    const response = await API.popular();
    setMovies(response);
  }, []);

  useEffect(() => {
    hadleFetchPopular();
  }, [hadleFetchPopular]);

  return (
    <>
      <PageTitle title={'Trending today'} />
      {!isLoaded && <Loader />}
      {isLoaded && <MovieList movies={movies} />}
    </>
  );
}