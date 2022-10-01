import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from "../Searchbar/Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
   const state = window.location.search.split('=')[1];
   const [value, setValue] = useState('');

   useEffect(() => {
      if (state) {
         setValue(state);
         return;
      }
      setValue('');
   }, [state]);

   const onFormSubmit = e => {
      e.preventDefault();
      onSubmit(value);
   };

   return (
      <div className={styles.Searchbar}>
         <form className={styles.SearchForm} onSubmit={onFormSubmit}>
            <input
               className={styles.SearchFormInput}
               type="text"
               autoComplete="off"
               autoFocus={true}
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder="Search movies"
            />
         </form>
      </div>
   );
}

Searchbar.propTypes = {
   onSubmit: PropTypes.func.isRequired,
};