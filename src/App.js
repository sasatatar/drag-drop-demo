import React, { Component } from "react";
import uuid from "uuid";
import logo from "./logo.svg";
import "./App.css";

const DropZone = ({ position, onDropHandle }) => (
  <div className="DropZone" position={position} />
);

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

  onDragStart = e => console.log("testing... ", e.target.id);

  render() {
    const { lis } = this.state;

    return (
      <div className="App">
        <ul>
          <DropZone position={0} />
          {lis.map(({ id, name }, index) => (
            <span key={id}>
              <li draggable="true" id={id} onDragStart={this.onDragStart}>
                {name}
              </li>
              <DropZone position={index + 1} />
            </span>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
