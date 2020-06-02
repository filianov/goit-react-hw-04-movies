import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import Cast from './pages/MovieDetailsPage';
// import Reviews from './pages/MovieDetailsPage';
// import NotFoundPage from './pages/NotFoundPage';
import Nav from './components/Nav';
import styles from './App.module.css';


const AsyncHomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */));

const AsyncMovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */));

const AsyncMoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */));

const AsyncNotFoundPage = lazy(() => import('./pages/NotFoundPage' /* webpackChunkName: "not-found-page" */));


const App = () => {
  const style = [styles.App];

  return (
    <div className={style}>
      <Nav className={styles.Nav} />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path='/' exact component={AsyncHomePage} />
          {/* <Route path='/movies/:movieId/reviews' component={Reviews} /> */}
          {/* <Route path='/movies/:movieId/cast' component={Cast} /> */}
          <Route path='/movies/:movieId' component={AsyncMovieDetailsPage} />
          <Route path='/movies' component={AsyncMoviesPage} />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>

  );
};

export default App;
