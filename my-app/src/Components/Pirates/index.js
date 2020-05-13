import React from "react";
import "./style.css";

function Pirates(props) {
    return (
        <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={props.shuffle}/>
        
        </div>
        </div>
    )
}

export default Pirates;