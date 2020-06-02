import React, { Component } from 'react';
import * as moviesApi from '../services/moviesApi';
import Reviews from '../components/Reviews';
import Error from '../components/Error';
import PropTypes from 'prop-types';

const getIdFromProps = props => props.match.params.movieId;

export default class ReviewsPage extends Component {
    state = {
        reviews: null,
    };

    componentDidMount() {
        const id = getIdFromProps(this.props);
        moviesApi.fetchSelectedMovieReviews(id).then(reviews => this.setState({ reviews }))
    }

    componentDidUpdate(prevProps, prevState) {
        const value = 'We do not have any reviews for this movie'
        const prevReviews = prevState.reviews;
        const nextReviews = this.state.reviews;
        if (prevReviews !== nextReviews) { return this.setState({ error: value }) }
    }

    render() {
        const { reviews, error } = this.state;
        return (
            <>
                {reviews && <Reviews reviews={reviews} />}
                {error && <Error err={error} />}
            </>
        );
    }
};

ReviewsPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};


