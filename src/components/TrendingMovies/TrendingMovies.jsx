import { Link, useLocation } from "react-router-dom";

export const TrendingMovies = ({ trendingMovies }) => {
  const location = useLocation();
  
  return (
    <ul>
      {trendingMovies.map(({id, title}) => {
        return (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
