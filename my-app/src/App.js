import React, { Component } from "react";
import Pirates from "./Components/Pirates";
import Scoreboard from "./Components/Scoreboard";
import Wrapper from "./Components/Wrapper";
import Jumbotron from "./Components/Header";
import pirates from "./onePiece.json";
import "./App.css";

class App extends Component {
  state = {
    pirates,
    clickedPirates: [],
    score: 0,
    topScore: 0,
    correct: "Click on an image to begin!"
  };



  handleShuffle = () => {
    for (let i = this.state.pirates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.pirates[i], this.state.pirates[j]] = [
        this.state.pirates[j],
        this.state.pirates[i]
      ];
    }

    this.setState({ pirates: this.state.pirates });

    
  };

  calculateScore = id => {
    const clicked = this.state.pirates.filter(pirate => pirate.id === id);
    this.setState({ clickedPirates: this.state.clickedPirates.unshift(clicked)})
    console.log(this.state.clickedPirates);
    
  }

  render() {
    return (
      <div>
        <Scoreboard
          correct={this.state.correct}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />

        <Wrapper>
          {this.state.pirates.map(pirate => (
            <Pirates
              id={pirate.id}
              key={pirate.id}
              name={pirate.name}
              image={pirate.image}
              shuffle={this.handleShuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
