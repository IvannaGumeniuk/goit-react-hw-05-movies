import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/moviesApi";
import styles from "./Reviews.module.css";


export default function Reviews(){
   const {movieId} = useParams();
   const [reviews, setReviews] = useState(null);

   useEffect(() => {
      fetchMovieReviews(movieId).then(date => 
         setReviews(date.results));
   }, [movieId]);

   return (
      <ul className={styles.list}>
         {reviews && reviews.length ? (
            reviews.map(review => (
               <li className={styles.items} key={review.id}>
                  <h2>Author: {review.author}</h2>
                  <p>{review.content}</p>
               </li>
            ))
         ) : (
            <li>We don`t have any reviews for this movie</li>
         )} 
      </ul>
   );
};
