import React from 'react';

import '../../styles/components/UI/Map.css';

const Map = props => {

    return (
        <img
            className={`map ${props.className}`}
            style={props.style}
            id="map"
            src={props.mapUrl}
            alt={props.title}/>
    );
};

export default Map;