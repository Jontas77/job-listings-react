import React from 'react';

const Image = ({ url, desc="" }) => {
    return (
        <div className="image-container">
            <img src={url} alt={desc} />
        </div>
    )
}

export default Image;
