import React, { Component } from 'react';
import * as moviesApi from '../services/moviesApi';
import CastDetails from '../components/Cast';
import PropTypes from 'prop-types';


const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
    state = { cast: null };

    componentDidMount() {
        const id = getIdFromProps(this.props)
        moviesApi.fetchSelectedMovieCast(id).then(cast => this.setState({ cast }));
    }

    render() {
        const { cast } = this.state;
        return <div>
            {cast && <CastDetails cast={cast} />}
        </div>
    }
};

Cast.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
};