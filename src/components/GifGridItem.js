import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({title, url}) => {

    return (
        <a 
            href={ url } 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-gif animate__animated animate__fadeIn">
            <div className="card-gif-wrapper">
                <img 
                    alt={ title } 
                    src={ url } 
                />
            </div>
            { title && <p className="card-gif-text">{ title }</p> }
        </a>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default GifGridItem;
