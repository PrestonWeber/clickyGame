import React, { Component } from "react";
import Characters from "./Components/Characters";
import Scoreboard from "./Components/Scoreboard";
import Wrapper from "./Components/Wrapper";
import Jumbotron from "./Components/Header";
import characters from "./onePiece.json";
import "./App.css";

class App extends Component {
  state = {
    characters: characters,
    clickedChar: [],
    topScore: 0,
    banner: "Click on an image to begin!"
  };

  handleClicked = name => {
    this.handleShuffle();
    this.checkGuess(name);
  };

  handleShuffle = () => {
    this.setState(
      (this.state.characters = this.shuffleArray(this.state.characters))
    );
  };

  shuffleArray = arr => {
    var a, b, c;
    for (a = arr.length - 1; a > 0; a--) {
      b = Math.floor(Math.random() * (a + 1));
      c = arr[a];
      arr[a] = arr[b];
      arr[b] = c;
    }
    return arr;
  };

  checkGuess = name => {
    let newState = { ...this.state };
    if (newState.clickedChar.includes(name)) {
      newState.banner = `You already picked ${name}`;
      newState.clickedChar = [];
      this.setState((this.state = newState));
    } else {
      newState.clickedChar.push(name);
      newState.banner = `Correct!`;
      this.setState((this.state = newState));
    }
    this.updateTopScore(newState);
  };

  updateTopScore = newState => {
    if (newState.clickedChar.length > newState.topScore) {
      newState.topScore++;
      this.setState((this.state = newState));
    }
    this.alertWin(newState);
  };

  alertWin = newState => {
    if (newState.clickedChar.length === this.state.characters.length) {
      newState.banner = "You win!";
      newState.clickedChar = [];
      this.setState((this.state = newState));
    }
  };

  render() {
    return (
      <div>
        <Scoreboard
          score={this.state.clickedChar.length}
          topScore={this.state.topScore}
        />
        <Jumbotron banner={this.state.banner} />

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
