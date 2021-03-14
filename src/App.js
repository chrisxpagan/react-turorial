import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "sgas", name: "Chris", age: 30 },
      { id: "gashs", name: "Fiyin", age: 28 },
      { id: "aeifn", name: "Ghan", age: 27 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personsIndex) => {
    // const persons = this.state.persons.slice();
    // or:
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>this is really working!</p>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
