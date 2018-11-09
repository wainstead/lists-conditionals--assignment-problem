import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="cp" onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    )
}

export default charComponent;