import React, { Component } from "react";
import Characters from "./Components/Characters";
import Scoreboard from "./Components/Scoreboard";
import Wrapper from "./Components/Wrapper";
import Jumbotron from "./Components/Header";
import characters from "./onePiece.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      clickedChar: [],
      topScore: 0,
      banner: `Click on an image to begin, try not to click the same character twice.`
    };
  }

  handleClicked(name) {
    this.handleShuffle();
    this.checkGuess(name);
  }

  handleShuffle() {
    this.setState({ characters: this.shuffleArray(this.state.characters) });
  }

  shuffleArray(arr) {
    var a, b, c;
    for (a = arr.length - 1; a > 0; a--) {
      b = Math.floor(Math.random() * (a + 1));
      c = arr[a];
      arr[a] = arr[b];
      arr[b] = c;
    }
    return arr;
  }


  checkGuess(name) {
    if (this.state.clickedChar.includes(name)) {
      this.setState({ banner: `You already guessed ${name}`, clickedChar: [] });
    } else {
      let clickedChar = this.state.clickedChar;
      clickedChar.push(name);
      this.setState({
        clickedChar: clickedChar,
        banner: `You guessed Correctly!`
      });
    }
    this.updateTopScore();
  }


  updateTopScore() {
    if (this.state.clickedChar.length > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    this.alertWin();
  }


  alertWin() {
    if (this.state.clickedChar.length === this.state.characters.length) {
      this.setState({ banner: "You Win!" });
      this.setState({ clickedChar: [] });
    }
  }

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
              key={pir.name}
              name={pir.name}
              image={pir.image}
              handleClicked={name => this.handleClicked(name)}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
