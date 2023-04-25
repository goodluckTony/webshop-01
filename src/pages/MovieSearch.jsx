import { useState, useEffect } from "react";
import { search } from "../utils/moviesApi";

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e) => setQuery(e.target.value);

  useEffect(() => {
    search(query)
    .then(({ results }) => setMovieList(results))
  }, [query]);

  return (
    <div className="movie-search">
      <input type="text" value={query} onChange={handleChange} />

      <ul>
        {movieList.map(({ id, original_title }) => (
          <li key={id}>{original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;