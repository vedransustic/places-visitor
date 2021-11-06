import React from 'react';

import '../../styles/components/Navigation/MainHeader.css'

const MainHeader = (props) => {
    return (
        <header className="main-header">
            {props.children}
        </header>
    );
};

export default MainHeader;