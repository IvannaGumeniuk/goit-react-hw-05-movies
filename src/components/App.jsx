import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from "../pages/Home/Home";
import { Movies } from "../pages/Movies/Movies";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import { NotFound } from './NotFound/NotFound';


export const App = () => {
  return (
      
  <div>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} >
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
          </Route>
    </Routes>

    </div>
  );
};
