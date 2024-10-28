import React from 'react';
import UserProfile from './components/userProfile';
import MoviesList from './components/MovieList';
import './App.css'


function App() {
  return (
    <div className="App">
      <UserProfile />
      <MoviesList />
    </div>
  );
}

export default App