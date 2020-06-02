import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const MoviesSearchList = ({ movies, match, location, title = '' }) => (
    <>
        <h2>{title}</h2>
        <ul>
            {movies.map(movie => (<li key={movie.id}>
                <Link to={{
                    pathname: `${match.path}/${movie.id}`,
                    state: { from: location, },
                }
                }>{movie.title}</Link></li>))}
        </ul>
    </>
);

MoviesSearchList.defaultProps = {
    movies: [],
};

MoviesSearchList.propTypes = {
    movies: PropTypes.array,
    match: PropTypes.object,
    location: PropTypes.object,
    title: PropTypes.string,
};

export default withRouter(MoviesSearchList);