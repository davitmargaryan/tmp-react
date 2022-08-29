import React from "react";

class Form extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      inputValue: "",
      divValue: "",
      checked: false,
    };
  }

  onInputChange = (e) => {
    console.log("onchange event fired");
    this.setState({
      inputValue: e.target.value,
    });
  };

  onCheckboxChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    console.log("Form component rerendered");
    return (
      <>
        <input
          value={this.state.inputValue}
          onChange={this.onInputChange}
          type="text"
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onCheckboxChange}
        />
        <div>{this.state.divValue}</div>
        <div>{String(this.state.checked)}</div>
        <button
          onClick={() =>
            this.setState({
              divValue: this.state.inputValue,
            })
          }
        >
          alert input value
        </button>
      </>
    );
  }
}

export default Form;
