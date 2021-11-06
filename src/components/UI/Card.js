import React from 'react';

import '../../styles/components/UI/Card.css'

const Card = (props) => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export default Card;