import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("WatchList" in m);
  });

  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} /> 
        }}
        
      />
  );
};

export default MovieListPage;
