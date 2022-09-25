// export const Home = () => {
//   return (
//     <main>
//       <h1>Trending today</h1>
//       <img src="https://via.placeholder.com/960x240" alt="" />
//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//         laboriosam placeat incidunt rem illum animi nemo quibusdam quia
//         voluptatum voluptate.
//         https://api.themoviedb.org/3/trending/movie/day?api_key=8b583155d58a646685ec9258b19767f3
//         https://api.themoviedb.org/3/movie/550?api_key=8b583155d58a646685ec9258b19767f3
//       </p>
//     </main>
//   );
// };

import { useEffect, useState } from "react";

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=8b583155d58a646685ec9258b19767f3")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoader(true);
          setResults(result);
          console.log(result);
        },
        (error) => {
          setIsLoader(true);
          setError(error);
        }
    )
  }, [])
  
  if (error) {
    return <div>Помилка: {error.message} </div>;
  } else if (!isLoader) {
    return <div>Завантаження ... </div>;
  } else {
    console.log("arr:", results);
    return (
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
        
    );
}
}

// function renderUserList(users) {
//   const markup = users.map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
  // innerHTML = markup;
