import React, {useEffect, useState} from "react";
import {getPopularMovies} from '../../api/tmdb-api';
import ImageGallery from 'react-image-gallery';
import "./popularMovies.css";
import "react-image-gallery/styles/css/image-gallery.css"

export default () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getPopularMovies().then(res => setMovies(res.map(m => ({
      original: 'https://image.tmdb.org/t/p/w500/' + m.poster_path,
      sizes: {height: '50vh'}
    }))))
  }, [])
  return <div className='image-gallery'>
    <ImageGallery items={movies} showThumbnails={false} autoPlay/>
  </div>;
};

