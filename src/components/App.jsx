import { Routes, Route } from "react-router-dom";
// import { SharedLayout } from "./SharedLayout/SharedLayout";
// import { Home } from "../pages/Home/Home";
// import { Movies } from "../pages/Movies/Movies";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
// import { Cast } from "./Cast/Cast";
// import { Reviews } from "./Reviews/Reviews";
// import { NotFound } from './NotFound/NotFound';


export const App = () => {
  return (
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} /> */}
        <Route path="/" element={<div>jhgbbh</div>} />
          {/* <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} /> */}
        {/* </Route> */}
      </Routes>
  );
};
