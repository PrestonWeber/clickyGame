import React from "react";

function JumboTron(props) {
    return (
        <div className="jumbotron">
           <h1>{props.correct}</h1> 
        </div>
    )
}

export default JumboTron;
