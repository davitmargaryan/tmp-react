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
    // fetch getString()
    // this.setState({asd : 'nor ekac tvyal@'})
    // console.log("Component already mounted");
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
        asd: this.state.asd + 1,
      });
      //   this.state.date = new Date();
      //   console.log(this.state.date);
      //   this.render();
    }, 5000);
  }

  componentDidUpdate() {
    // console.log("component updated");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    // console.log("render method called");
    // console.log(this.state.date);
    return (
      <>
        <h2>
          {this.props.dsa}
          {this.props.asd} It is {this.state.date.toLocaleTimeString()}.
        </h2>
        {this.state.asd ? <div>{this.state.asd}</div> : null}
        {!!this.state.asd && <div>{this.state.asd}</div>}
        <div>{this.state.dsa}</div>
      </>
    );
  }
}

export default ClockClass;
