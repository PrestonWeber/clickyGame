import React from "react";
import "./style.css";

function Characters(props) {
    return (
        <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} onClick={() => props.handleClicked(props.name)}/>
        
        </div>
        </div>
    )
}

export default Characters;