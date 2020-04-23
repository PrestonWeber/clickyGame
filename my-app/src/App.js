import React, { Component } from 'react';
import Pirates from "./Components/Pirates";
import Scoreboard from "./Components/Scoreboard";
import Wrapper from "./Components/Wrapper"
import pirates from "./onePiece.json";
import './App.css';

class App extends Component {
  state = {
    pirates,
    score: 0,
    topScore: 0,
    correct: "Click on an image to begin!"
  };

  render() {
    return (
      <Wrapper>
      <Scoreboard
        correct={this.state.correct}
        score={this.state.score}
        topScore={this.state.topScore}
      />
      
        {this.state.pirates.map(pirate => (
          <Pirates
          id={pirate.id}
          name={pirate.name}
          image={pirate.image}
          />
        ))}
      </Wrapper>
    );
  }
}



export default App;
