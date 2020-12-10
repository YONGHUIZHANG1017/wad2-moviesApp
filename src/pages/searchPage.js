import React, {useState} from "react";
import MovieList from "../components/movieList";
import {Input} from 'antd';
import {searchMovies} from '../api/tmdb-api'

const SearchPage = () => {
  const [movies, setMovies] = useState([])

  const onSearch = (value) => {
    if(!value) return
    searchMovies(value).then(setMovies)
  }
  return (
    <div>
      <Input.Search
        size={"large"}
        style={{marginBottom: 24}}
        onSearch={onSearch}
        placeholder={'search movie'}/>
      <MovieList movies={movies}/>
    </div>
  );
};

export default SearchPage;
