import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const Movie = ({ id, title, vote_average, overview, genres, poster_path, release_date, onGoBack }) => {
    const date = new Date(release_date);
    const year = date.getFullYear();
    const reputation = (vote_average / 10) * 100;
    const style = {
        display: 'flex',
    }

    return <>
        <button type="button" onClick={onGoBack}>Go back</button>
        <div style={style}>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt='movie poster' />
            <div><h2>{title} ({year})</h2>
                <p>User Score: {reputation}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <ul>Genres
        {genres.map(item => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        </div>
        <ul>Additional information
            <li><NavLink to={`/movies/${id}/cast`}>Cast</NavLink> </li>
            <li><NavLink to={`/movies/${id}/reviews`}>Review</NavLink></li>
        </ul>
    </>

}

Movie.defaultProps = {
    title: '',
};

Movie.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    onGoBack: PropTypes.func,
};

export default Movie;
