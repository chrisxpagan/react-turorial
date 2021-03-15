import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    inputLength: 0,
    inputText: "",
    isLongEnough: false,
  };

  updateTextLength = (event) => {
    const length = event.target.value.length;

    this.setState({
      inputLength: length,
      inputText: event.target.value,
      isLongEnough: length >= 5 ? true : false, // I am sure there is a better way than copying from ValidationComponent
    });
  };

  removeCharacterBlock = (event, index) => {
    let input = this.state.inputText.split("");
    input.splice(index, 1);
    this.setState({
      inputText: input.join(""),
      isLongEnough: input.length >= 5 ? true : false,
    });
  };

  render() {
    const inputChars = [...this.state.inputText];

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.updateTextLength}
          value={this.state.inputText}
        ></input>

        <p>{this.state.inputLength}</p>

        <ValidationComponent inputSize={this.state.inputLength} />

        {this.state.isLongEnough
          ? inputChars.map((char, index) => (
              <CharComponent
                key={index}
                character={char}
                click={(event, index) =>
                  this.removeCharacterBlock(event, index)
                }
              />
            ))
          : null}
      </div>
    );
  }
}

export default App;
