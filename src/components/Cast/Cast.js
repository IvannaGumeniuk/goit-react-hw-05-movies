import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits, URL_IMG } from "../../services/moviesApi";
import anonim from "../../imeges/anonim.jpg";
import styles from "./Cast.module.css";

export default function Cast() {
   const { movieId } = useParams();
   const [authors, setAuthors] = useState(null);

   useEffect(() => {
      fetchMovieCredits(movieId).then(date => {
         setAuthors([...date.cast]);
      });
   }, [movieId]);

   return (
      <ul className={styles.authors_info}>
         {authors &&
            authors.map(({ id, profile_path, name, cast_id }) => (
               <li className={styles.item} key={id + cast_id}>
                  <img
                     className={styles.imgAutors}
                     src={ profile_path ? URL_IMG + profile_path : anonim}
                     alt={name}
                     width="100"
                  />
                  <p className={styles.title}> {name} </p>
               </li>
            ))}
      </ul>
   );
}