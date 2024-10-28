import React, { useState } from 'react'; //Assignment 2

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', genre: 'Drama' },
    { title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', genre: 'Crime' },
    { title: 'The Dark Knight', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.', genre: 'Action' },
    { title: 'Pulp Fiction', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', genre: 'Crime' },
    { title: 'Forrest Gump', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.', genre: 'Drama' }
  ]);

  const [newMovie, setNewMovie] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const [viewMode, setViewMode] = useState(true); // true for View, false for Edit
  const [filterGenre, setFilterGenre] = useState('All'); // To toggle between showing all movies and specific genre

  const addMovie = () => {
    if (newMovie.trim() && newGenre.trim()) {
      setMovies([...movies, { title: newMovie.trim(), description: 'No description available', genre: newGenre.trim(), showDetails: false }]);
      setNewMovie('');
      setNewGenre('');
    }
  };

  const removeMovie = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  const toggleViewMode = () => {
    setViewMode(!viewMode);
  };

  const toggleDetails = (index) => {
    const updatedMovies = movies.map((movie, i) => (
      i === index ? { ...movie, showDetails: !movie.showDetails } : movie
    ));
    setMovies(updatedMovies);
  };

  const filterMoviesByGenre = (genre) => {
    setFilterGenre(genre);
  };

  const filteredMovies = filterGenre === 'All'
    ? movies
    : movies.filter(movie => movie.genre === filterGenre);

  return (
    <div>
      <h1>Favorite Movies</h1>
      <button onClick={toggleViewMode}>
        {viewMode ? 'Edit' : 'View'}
      </button>

      <button onClick={() => filterMoviesByGenre('All')}>All</button>
      <button onClick={() => filterMoviesByGenre('Action')}>Action</button>
      <button onClick={() => filterMoviesByGenre('Drama')}>Drama</button>
      <button onClick={() => filterMoviesByGenre('Crime')}>Crime</button>

      {viewMode ? (
        <ul>
          {filteredMovies.map((movie, index) => (
            <li key={index} onClick={() => toggleDetails(index)}>
              {movie.title}
              {movie.showDetails && (
                <p>{movie.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <ul>
            {filteredMovies.map((movie, index) => (
              <li key={index}>
                {movie.title}
                <button onClick={() => removeMovie(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            placeholder="Add a new movie"
          />
          <input
            type="text"
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            placeholder="Add a genre"
          />
          <button onClick={addMovie}>Add Movie</button>
        </div>
      )}
    </div>
  );
};

export default MoviesList;