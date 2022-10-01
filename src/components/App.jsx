import { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import NotFound from '../pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home.js'));
const Movies = lazy(() => import('../pages/Movies/Movies.js'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails.js'));
const Cast = lazy(() => import('./Cast/Cast.js'));
const Reviews = lazy(() => import('./Reviews/Reviews.js'));

export default function App () {
  return (
  <div>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  </div>
  );
};
