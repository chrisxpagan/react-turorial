import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    outputs: [
      { username: "Chris", output: "Here is some text" },
      { username: "Patrick", output: "How do you do today?" },
    ],
  };

  updateUsername = (event) => {
    this.setState({
      outputs: [
        { username: event.target.value, output: "We updating!" },
        { username: "Maury", output: "We have new text!" },
      ],
    });
  };

  render() {
    const inputStyle = {
      border: "1px solid rgb(13, 78, 191)",
      boxShadow: "3px 3px 4px green",
      backgroundColor: "white",
      margin: "20px",
      textSize:  "20px"
    };

    return (
      <div className="App">
        <UserInput
          inputStyle={inputStyle}
          change={this.updateUsername}
          username={this.state.outputs[0].username}
        />
        <UserOutput
          username={this.state.outputs[0].username}
          text={this.state.outputs[0].output}
        />
        <UserOutput
          username={this.state.outputs[1].username}
          text={this.state.outputs[1].output}
        />

        <ol className="instructions">
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>
            UserInput should hold an input element, UserOutput two paragraphs
          </li>
          <li>
            Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
          </li>
          <li>
            Pass a username (of your choice) to UserOutput via props and display
            it there
          </li>
          <li>
            Add state to the App component (=> the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
