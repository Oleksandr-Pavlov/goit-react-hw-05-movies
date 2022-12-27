import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/fetchMovieCredits';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCredits(id)
      .then(({cast}) => setCast(cast))
      .catch(error => setError(error));
  }, [id]);

  const poster = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {error && <h1>Oops, {error.message}. Please reload the page</h1>}
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path !== null ? poster + profile_path : 'https://via.placeholder.com/300x450'}
              alt="name"
              width="300"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  ); 
};
