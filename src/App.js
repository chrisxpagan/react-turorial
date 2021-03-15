import React, { Component } from "react";
import Validation from "./Validaiton/Validation";
import Char from "./Char/Char";
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
      inputLength: input.length,
    });
  };

  render() {
    const inputChars = [...this.state.inputText];

    let characters = null;

    if (this.state.isLongEnough) {
      characters = inputChars.map((char, index) => {
        return (
          <Char
            key={index}
            character={char}
            click={(event, index) => this.removeCharacterBlock(event, index)}
          />
        );
      });
    }

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />

        <input
          type="text"
          onChange={this.updateTextLength}
          value={this.state.inputText}
        ></input>

        <p>{this.state.inputLength}</p>

        <Validation inputSize={this.state.inputLength} />

        {characters}
      </div>
    );
  }
}

export default App;
