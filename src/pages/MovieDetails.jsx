import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { BackLink } from '../components/BackLink/BackLink';
import { fetchMovieDetailsById } from '../services/fetchMovieDetailsById';

const MovieDetails = () => {
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
  const poster = 'https://image.tmdb.org/t/p/w500';

  return (
    <main>
      {error && (
        <h1>Oops, {error.message}. Please reload the page or go back</h1>
      )}
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      {!error && (
        <>
          <div style={{ display: 'flex', gap: '50px', margin: '16px 0' }}>
            <img
              src={
                poster_path !== null
                  ? poster + poster_path
                  : 'https://via.placeholder.com/300x450'
              }
              alt={title}
              width="300"
              loading='lazy'
            />
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
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
                <p>
                  {genres && genres.length
                    ? genres.map(genre => genre.name).join(', ')
                    : 'There are no known genres'}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              margin: '16px 0',
              borderBottom: '1px solid black',
              borderTop: '1px solid black',
            }}
          >
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails