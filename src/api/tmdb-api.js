export const getMovies = () => {
  return fetch(
    `/api/getMovies?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
    .then(res => res.json())
    .then(json => json);
};

export const getMovie = id => {
  return fetch(
    `/api/getMovie/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    "/movies/api/genres?api_key=" +process.env.REACT_APP_TMDB_KEY + "&language=en-US")
    .then(res => res.json())
    .then(json => json.genres);
};
export const getMovieReviews = id => {
  return fetch(
    `/api/MovieReviews/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json);
  }

export const getUpcomingMovies = () => {
  return fetch(
    `/api/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(json => json.results);
};
export const getPopularMovies = () => {
  return fetch(
    `api/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then(res => res.json())
    .then(json => json);
};


export const newToken = () => {
  return fetch(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.request_token)
};
export const newSession = (token) => {
  return fetch(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
    , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        request_token: token
      })
    })
    .then(res => res.json())
    .then(json => json.session_id)
};
export const getAccountDetails = (sessionId) => {
  return fetch(
    `https://api.themoviedb.org/3/account?api_key=${process.env.REACT_APP_TMDB_KEY}&session_id=${sessionId}`
  )
    .then(res => res.json())
};
export const login = (username, password) => {
  return newToken().then(token => {
    return fetch(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_TMDB_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username, password, request_token: token
        })
      })
  }).then(res => res.json())
};

export const searchMovies = (query) => {
  return fetch(
    `api/Search?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}`
  )
    .then(res => res.json())
    .then(json => json || []);
}
