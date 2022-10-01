import { Suspense } from 'react';
import { useEffect, useState } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import { URL_IMG, fetchMovieDetailsById } from "../../services/moviesApi";
import Loader from 'components/Loader/Loader';
import NotFound from 'pages/NotFound/NotFound';
import nophoto from "../../imeges/nophoto.png";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => { 
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovieDetailsById(movieId)
        .then(setMovie)
        .catch(error => setError(error));
    }, [movieId]);
    

    return (
        <div>
            {movie && (
                <div className={styles.details_info}>
                    <img className={styles.image} src={movie.poster_path ? URL_IMG + movie.poster_path : nophoto} width="250px" alt='movie poster'></img>
                    <div className={styles.info}>
                        <div>
                            <h2 className={styles.film_name}>{movie.title}</h2>
                            <p><b className={styles.info_text}>User Score:</b> {movie.vote_average}</p>
                            <p><b className={styles.info_text}>Overview: </b>{movie.overview}</p>
                            <p><b className={styles.info_text}>Genres:</b>{' '}
                                {movie.genres.map(genr => genr.name).join(' / ')}</p>
                        </div>

                        <nav>
                            <NavLink to="cast" className={({ isActive }) =>
                                isActive ? `${styles.active}` : `${styles.inactive}`}>Cast</NavLink>
                            <NavLink to="reviews" className={({ isActive }) =>
                                isActive ? `${styles.active}` : `${styles.inactive}`}>Reviews</NavLink>
                        </nav>
                    </div>
                </div>
            )}
        
            {error && <NotFound />}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;