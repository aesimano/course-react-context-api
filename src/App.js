import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// first make a new context
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Dre",
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <p>I'm {context.state.name}</p>
              <p>and I am {context.state.age} years old</p>
              <button onClick={context.growAYearOlder}>+</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Dre's World</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Person />
        </div>
      </MyProvider>
    );
  }
}

export default App;
