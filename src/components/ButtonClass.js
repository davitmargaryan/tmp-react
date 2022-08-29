import React from "react";

class ButtonClass extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      myNumber: 1,
    };
    this.onIncrementClick = this.onIncrementClick.bind(this);
  }

  onDecrementClick = () => {
    this.setState({
      myNumber: this.state.myNumber - 1,
    });
  };

  onIncrementClick() {
    this.setState(function (asd) {
      return {
        myNumber: asd.myNumber + 1,
      };
    });
  }

  changeNumber(dif) {
    this.setState({
      myNumber: this.state.myNumber + dif,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeNumber(-1)}>-</button>
        <span
          style={{
            fontSize: 20,
            margin: 10,
          }}
        >
          {this.state.myNumber}
        </span>
        <button
          onClick={() => {
            this.changeNumber(1);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default ButtonClass;
