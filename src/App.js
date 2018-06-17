import React, { Component } from "react";
import uuid from "uuid";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    lis: [
      { id: uuid(), name: "Li No. 1" },
      { id: uuid(), name: "Li No. 2" },
      { id: uuid(), name: "Li No. 3" },
      { id: uuid(), name: "Li No. 4" },
      { id: uuid(), name: "Li No. 5" },
      { id: uuid(), name: "Li No. 6" }
    ]
  };
  render() {
    const { lis } = this.state;

    return (
      <div className="App">
        <ul>
          {lis.map(({ id, name }, index) => (
            <li key={id} position={index} id={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
