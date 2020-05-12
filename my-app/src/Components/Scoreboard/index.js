import React from "react";
import "./style.css";

function Scoreboard(props) {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
            <li className="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li>{props.correct}</li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
}

export default Scoreboard;