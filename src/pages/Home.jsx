import { Movies } from 'components/Movies/Movies';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchTrendingMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch(error => setError(error));
  }, [])

  return (
    <main>
      {error && <h1>Oops, {error.message}. Please reload the page or go back</h1>}
      {!error && (
        <>
          <h1>Trending today</h1>
          <Movies movies={movies} />
        </>
      )}
    </main>
  );
};

export default Home;
