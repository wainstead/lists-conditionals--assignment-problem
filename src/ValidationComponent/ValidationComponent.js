import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {
    //let isTextLongEnough = false;
    let msg = "Text too short";
    if (props.strlength >= 5) {
        msg = "Text long enough"
    }
    return (
        <div>
            <p className="vcp">The length of the string is {props.strlength}</p>
            <p className="vcp">{msg}</p>
        </div>
    )
}

export default validationComponent;