import { useEffect, useState } from "react";
import { fetchTrending } from "../../services/moviesApi";
import Loader from "../../components/Loader/Loader";
import Button from "components/Button/Button";
import MoviesGallery from "../../components/MoviesGallery/MoviesGallery";
import styles from "./Home.module.css";

export default function Home() {
    const [moviesList, setMoviesList] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [showLoadMore, setShowLoadMore] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setShowLoadMore(false);
      setLoading(true);
      fetchTrending(countPage).then(date => {
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
        setShowLoadMore(true);
      });
    }, [countPage] );
  
  const onloadeMore = () => {
    setCountPage(prev => prev + 1);
  };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Top 20 Trending Movies Today</h1>
        <MoviesGallery moviesList={moviesList} />
        {loading && <Loader />}
        {showLoadMore && <Button onClick={onloadeMore} title="Load more" />}
      </div>
    );
  }