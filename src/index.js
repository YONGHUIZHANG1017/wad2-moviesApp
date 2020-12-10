import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom"    // CHANGED
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.css';
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import SearchPage from "./pages/searchPage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingPage"
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import {Provider} from 'react-redux';
import {store} from './reducers'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader/> {/* New Header  */}
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <ul className="navbar-nav text-black">

                </ul>
                <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage}/>
                  <Route path="/reviews/:id" component={MovieReviewPage}/>
                  <Route exact path="/movies/upcoming" component={UpcomingMoviesPage}/>
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage}/>
                  <Route path="/movies/:id" component={MoviePage}/>
                  <Route path="/search" component={SearchPage}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/" component={HomePage}/>

                  <Redirect from="*" to="/"/>
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>

          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
