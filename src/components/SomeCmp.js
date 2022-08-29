import React from "react";

class SomeCmp extends React.Component {
  state = {
    myRandomNumber: 1,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return {
          myRandomNumber: oldState.myRandomNumber + 1,
        };
      });
      //   this.state.myRandomNumber = Math.random();
    }, 1000);
  }

  render() {
    return (
      <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
        {this.state.myRandomNumber}
      </div>
    );
  }
}

export default SomeCmp;
