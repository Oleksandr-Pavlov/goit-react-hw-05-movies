import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/fetchMovieReviews';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id)
      .then(({ results }) => setReviews(results))
      .catch(error => setError(error));
  }, [id]);

  return (
    <>
      {error && <h1>Oops, {error.message}. Please reload the page</h1>}
      {reviews.length > 0 ? <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id} style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px' }}>
              <b>Author:</b> {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </ul> : <p>Sorry, this movie has no reviews</p>}
    </>
  );
};

export default Reviews
