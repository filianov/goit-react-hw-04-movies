import React, { Component } from 'react';
import * as moviesApi from '../services/moviesApi';
import MoviesList from '../components/MoviesList';
import PropTypes from 'prop-types';


export default class HomePage extends Component {
    state = { movies: [] };

    componentDidMount() {
        moviesApi.fetchMoviesTrending().then(movies => this.setState({ movies }));
    };

    render() {
        const { movies } = this.state;
        return <MoviesList movies={movies} title='Tranding today' />
    };
};

HomePage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};

