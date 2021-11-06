import React from 'react';
import ReactDOM from 'react-dom'

import '../../styles/components/UI/Backdrop.css'

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={props.onClick}/>,
    document.getElementById('backdrop-hook'));
};

export default Backdrop;