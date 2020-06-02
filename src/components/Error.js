import React from 'react';
import PropTypes from 'prop-types';


const Error = ({ err }) => {
    return <div>{err}</div>

};

Error.propTypes = {
    err: PropTypes.string,
};


export default Error;