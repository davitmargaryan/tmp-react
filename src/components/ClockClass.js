import React from "react";

class ClockClass extends React.Component {
  constructor(...args) {
    super(...args);
    // console.log("constructor called");
    this.state = {
      date: new Date(),
      asd: 1,
      dsa: 333,
    };
  }

  componentDidMount() {
    console.log("ClockClass component mounted");
    this.timerId = setInterval(() => {
      console.log("interval callback");
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("ClockClass component updated");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("ClockClass component unmounted");
  }

  render() {
    // console.log("render method called");
    // console.log(this.state.date);
    return (
      <>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </>
    );
  }
}

export default ClockClass;
