import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails/>} />
      </Route>
    </Routes>
  );
};
