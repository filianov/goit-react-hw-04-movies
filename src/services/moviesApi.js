import axios from 'axios';
import PropTypes from 'prop-types';

export const fetchMoviesTrending = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1b60af4c13e458e3e2b13250467aca16`).then(res => res.data.results);
};

export const fetchSelectedMovie = (movieID) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=1b60af4c13e458e3e2b13250467aca16`).then(res => res.data);
};

export const fetchSelectedMovieCast = (movieID) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=1b60af4c13e458e3e2b13250467aca16`).then(res => res.data.cast);
};

export const fetchSelectedMovieReviews = (movieID) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=1b60af4c13e458e3e2b13250467aca16`).then(res => (res.data.results));
};

export const fetchSearchMovies = (query) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1b60af4c13e458e3e2b13250467aca16`).then(res => res.data.results);
};

fetchSelectedMovie.proptypes = {
    movieID: PropTypes.string,
};

fetchSelectedMovieCast.proptypes = {
    movieID: PropTypes.string,
};

fetchSelectedMovieReviews.proptypes = {
    movieID: PropTypes.string,
};

fetchSearchMovies.proptypes = {
    query: PropTypes.string,
};



