import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
    <nav className="jumbotron">
      <ul>
        <li>
          <a href="/">Clicky Game</a>
        </li>

        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Scoreboard;
