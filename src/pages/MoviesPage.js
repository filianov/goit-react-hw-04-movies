import React, { Component } from 'react';
import queryString from 'query-string';
import * as moviesApi from '../services/moviesApi';
import MoviesSearchList from '../components/MoviesSearchList';
import PropTypes from 'prop-types';


const getQueryWithLocation = location => queryString.parse(location.search).query;

export default class MoviesPage extends Component {
    state = {
        inputValue: '',
        movies: null,
    };

    handleChange = e => {
        this.setState({ inputValue: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        const query = this.state.inputValue;
        this.setState({ inputValue: '' })
        this.props.history.push({
            ...this.props.location,
            search: `query=${this.state.inputValue}`
        });
        moviesApi.fetchSearchMovies(query).then(movies => this.setState({ movies }));
    };

    componentDidMount() {
        const query = getQueryWithLocation(this.props.location)

        query && moviesApi.fetchSearchMovies(query).then(movies => this.setState({ movies }));

    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = getQueryWithLocation(prevProps.location);
        const nextQuery = getQueryWithLocation(this.props.location)

        if (prevQuery !== nextQuery) { moviesApi.fetchSearchMovies(nextQuery).then(movies => this.setState({ movies })); }
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <form className="styles.SearchForm" onSubmit={this.handleSubmit}>
                    <input
                        className="styles.SearchFormInput"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search for films"
                    />
                    <button type="button" className="styles.SearchFormButton" onClick={this.handleSubmit}>
                        <span className="styles.SearchFormButtonLabel">Search</span>
                    </button>
                </form>
                {movies && <MoviesSearchList movies={movies} />} </>
        );
    }
};

MoviesPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};
