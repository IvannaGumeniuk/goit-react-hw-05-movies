import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchSearchMovie } from "../../services/moviesApi";
import Searchbar from "../../components/Searchbar/Searchbar";
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";

const Movies = () => {
   const history = useNavigate();
   const location = useLocation();
   const state = window.location.search.split('=')[1];
   const [searchName, setSearchName] = useState(state ?? '');
   const [countPage, setCountPage] = useState(1);
   const [moviesList, setMoviesList] = useState([]);
   const [showLoadMore, setShowLoadMore] = useState(false);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (!state) {
         setShowLoadMore(false);
      }
      setSearchName(state);
      setCountPage(1);
      setMoviesList([]);
   }, [state]);

   useEffect(() => {
      if (!searchName) {
         return;
      }
      setShowLoadMore(false);
      setLoading(true);
      fetchSearchMovie(searchName, countPage)
      .then(date => {
         setMoviesList(prev => {
            const filterRes = date.results.filter(({ id }) => {
               for (const movie of prev) {
                  if (id === movie.id) {
                     return false;
                  }
               }
            return true;
            });
            return [...prev, ...filterRes];
         });
         setLoading(false);
            if (date.total_results !== date.results.length) {
               setShowLoadMore(true);
            }
            
            if (countPage === 1) {
               Notiflix.Notify.success(
                  `Hooray! We found ${date.total_results} movies.`
               );
            }
         
            if (date.total_results <= countPage * 20) {
               setShowLoadMore(false);
               Notiflix.Notify.info(
                  "We're sorry, but you've reached the end of search results."
               );
            }
      })
      .catch(onApiError);
      }, [countPage, searchName]);

   const onApiError = () => {
      Notiflix.Notify.failure(
         'Sorry, there are no movies matching your search query. Please try again.'
      );
      setShowLoadMore(false);
      setLoading(false);
   };

   const onSubmit = name => {
      if (!name) {
         Notiflix.Notify.failure('Please. Enter the name of the movie.');
         setShowLoadMore(false);
      }
      if (searchName === name && countPage === 1) {
         return;
      }
      history({ ...location, search: `query=${name}` });
      setSearchName(name);
      setCountPage(1);
      setMoviesList([]);
   };

   const onloadeMore = () => {
      setCountPage(prev => prev + 1);
   };

   return (
      <div>
         <Searchbar onSubmit={onSubmit} />
         <MoviesGallery moviesList={moviesList} />
         {loading && <Loader />}
         {showLoadMore && <Button onClick={onloadeMore} title="Load more" />}
      </div>
   );
};

export default Movies;