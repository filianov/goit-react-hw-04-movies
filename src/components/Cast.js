import React from 'react';
import PropTypes from 'prop-types';


const CastDetails = ({ cast }) => {

    return <ul>
        {cast.map(actor => (<li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt='actor foto' />
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
        </li>))}
    </ul>

};

CastDetails.propTypes = {
    cast: PropTypes.array,

};

export default CastDetails;