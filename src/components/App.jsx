import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { MoviesPage } from "pages/MoviesPage";
import { Route, Routes } from "react-router-dom";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Route>
    </Routes>
  );
};
