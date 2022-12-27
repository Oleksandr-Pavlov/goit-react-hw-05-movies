import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Movies } from '../components/Movies/Movies';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { fetchMoviesByQuery } from '../services/fetchMoviesByQuery';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') return;

      fetchMoviesByQuery(movieName)
        .then(({ results }) => setMovies(results))
        .catch(error => setError(error));
    }, [movieName]);

  return (
    <main>
      {error && <h1>Oops, {error.message}. Please reload the page</h1>}
      <SearchBox value={movieName} onChange={updateQueryString} />
      {movieName !== '' && movies.length === 0 && <p>Sorry, there are no films with this name</p>}
      <Movies movies={movies} />
    </main>
  );
};

export default MoviesPage