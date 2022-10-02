import PropTypes from 'prop-types';
import React from 'react';
import { URL_IMG } from '../../services/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import nophoto from "../../imeges/nophoto.png";
import styles from "./MoviesGallery.module.css";

export default function MoviesGallery({ moviesList }) {
   const location = useLocation()
   
   return (
      <ul className={styles.list} id="MoviesGallery">
         {moviesList.map(({ id, title, name, poster_path }) => (
            <li className={styles.item} key={id} >
               <Link to={`/movies/${id}`} state={{ from: location }} className="styles.link">
                  <img
                     src={poster_path ? URL_IMG + poster_path : nophoto}
                     alt={title || name} width="250px"
                  />
                  <p className={styles.name}><b>{title || name}</b></p>
               </Link>
            </li>
         ))}
         </ul>
         
   );
}

MoviesGallery.propTypes = {
   moviesList: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         title: PropTypes.string,
         name: PropTypes.string,
         poster_path: PropTypes.string,
      })
   )
}