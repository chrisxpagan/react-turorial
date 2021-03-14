import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Chris", age: 30 },
      { name: "Fiyin", age: 28 },
      { name: "Ghan", age: 27 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");
    // DON'T DO THIS: personsState.persons[0].name = 'Max'
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "F", age: 28 },
        { name: "Ghan Shyam", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
