import React from "react";
import "./style.css";

function Pirates(props) {
    return (
        <div className="Container">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
            <div onClick={() => props.shuffle(props.id)}></div>
        </div>
        </div>
    )
}

export default Pirates;