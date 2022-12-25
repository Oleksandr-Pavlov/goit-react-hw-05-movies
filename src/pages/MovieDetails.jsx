import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import { fetchMovieDetailsById } from '../services/fetchMovieDetailsById';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetailsById(id)
      .then(movie => setMovie(movie))
      .catch(error => setError(error));
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movie;
  const poster = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <main>
      {error && <h1>Oops, {error.message}. Please reload the page</h1>}
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <div style={{ display: 'flex', gap: '50px' }}>
        <img src={poster} alt={title} width="300" />
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div>
            <h2>{title}</h2>
            <p>User score: {Number(vote_average).toFixed(1)}</p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </main>
  );
};