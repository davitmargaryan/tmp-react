import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import ClockClass from "./components/ClockClass";
import DogApi from "./components/dogApi/DogApi";
import FirebaseTest from "./components/firebase/FirebaseTest";
import Hello from "./components/Hello";
import Hooks, { Asd } from "./components/hooks/Hooks";
import TodoApp from "./components/todo/TodoApp";
import { ThemeProvider } from "./contexts/ThemeContext";

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      theme: "blue",
      showClock: true,
    };
  }

  onThemeChange = (theme) => {
    this.setState({
      theme,
    });
  };

  render() {
    return (
      <ThemeProvider value={this.state.theme}>
        {/* <AppHeader onThemeChange={this.onThemeChange} /> */}
        {/* <TodoApp /> */}
        {/* <Hello
        name="Davit"
        someNumber={44}
        asd
        dsa="d"
        someObj={o}
        someArr={arr}
      /> */}
        {/* <DogApi /> */}
        {/* <button
          onClick={() => this.setState({ showClock: !this.state.showClock })}
        >
          {this.state.showClock ? "Hide clock" : "Show clock"}
        </button> */}
        {/* {this.state.showClock && <ClockClass />} */}
        {/* {this.state.showClock && <Hooks />} */}
        {/* <hr />
        <hr />
        <Asd /> */}
        <FirebaseTest />
      </ThemeProvider>
    );
  }
}

export default App;
