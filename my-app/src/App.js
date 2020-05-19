import React, { Component } from "react";
import Characters from "./Components/Characters";
import Scoreboard from "./Components/Scoreboard";
import Wrapper from "./Components/Wrapper";
import Jumbotron from "./Components/Header";
import characters from "./onePiece.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    clickedChar: [],
    topScore: 0,
    correct: "Click on an image to begin!"
  };

  handleClicked = id => {
    const name = id.target.attributes.getNamedItem("name").value;
    this.handleShuffle();
    this.checkGuess(name, this.updateTopScore);
  };

  handleShuffle = () => {
    this.setState({ characters: this.shuffleArray(this.state.characters) });
  };

  shuffleArray = a => {
    var b, c;
    for(b = a.length -1; b > 0; b--) {
      c = Math.floor(Math.random() * (b +1));
      a[b] = a[c];
      a[c] = a[b];
    }
      
    return a;
  };

  checkGuess = (name, cb) => {
    const newState = { ...this.state };
    if (newState.clickedChar.includes(name)) {
      newState.correct = `You already picked ${name}`;
      newState.clickedChar = [];
      this.setState((this.state = newState));
    } else {
      newState.clickedChar.push(name);
      newState.correct = `Correct!`;
    }
    cb(newState, this.alertWin);
  };

  updateTopScore = (newState, cb) => {
    if (newState.clickedChar.length > newState.topScore) {
      newState.topScore++;
      this.setState((this.state = newState));
    }
    cb(newState);
  };

  alertWin = newState => {
    if (newState.clickedChar.length === 12) {
      newState.correct = "You win!";
      newState.clickedChar = [];
      this.setState((this.state = newState));
    }
  };

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
          {this.state.characters.map(pir => (
            <Characters
              id={pir.id}
              key={pir.id}
              name={pir.name}
              image={pir.image}
              handleClicked={this.handleClicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
