import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';
import Movie from '../components/Movie'
import * as moviesApi from '../services/moviesApi';
import styles from '../App.module.css';
import PropTypes from 'prop-types';


const getIdFromProps = props => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
    state = { movie: null };

    componentDidMount() {
        const id = getIdFromProps(this.props)
        moviesApi.fetchSelectedMovie(id).then(movie => this.setState({ movie }));
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps)
    //     console.log(this.props)
    // }

    handleGoBack = () => {
        const { history, location } = this.props;

        if (location.state) {
            return history.push(location.state.from);
        }
        history.push('/');
    }
    render() {
        const { movie } = this.state;
        const id = getIdFromProps(this.props)

        return <div className={styles.Movie}>
            {movie && <Movie {...movie} onGoBack={this.handleGoBack} />}
            {this.props.location.pathname === `/movies/${id}/cast` && <Route path={`${this.props.match.path}/cast`} component={CastPage} />}
            {this.props.location.pathname === `/movies/${id}/reviews` && <Route path={`${this.props.match.path}/reviews`} component={ReviewsPage} />}
        </div>
    }
};

MovieDetailsPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};
