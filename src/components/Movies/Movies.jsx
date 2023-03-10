import { Link, useLocation } from "react-router-dom";

export const Movies = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul>
      {movies.map(({id, title}) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
