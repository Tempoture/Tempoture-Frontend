import React from 'react'
import image from './Tempoture Logo.jpg' 

const Artist = ({img, name}) => {

    return (
        <div className="artist">
            <img src={image} width="200px" />
            <p>{name}</p>
        </div>
    );

};

export default Artist
