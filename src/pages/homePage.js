import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import PopularMovies from '../components/popularMovies'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  console.log(context);
  const movies = context.movies&&context.movies.filter((m) => {  // New
    return !("favorite" in m);
  })||[];

  return (
    <>
      <PopularMovies/>
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
    </>
  );
};

export default MovieListPage;
