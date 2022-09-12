import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Hooks() {
  const [inputValue, setInputValue] = useState("22222222");
  const [breeds, setBreeds] = useState([]);
  const [date, setDate] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);
  const contextValue = useContext(ThemeContext);

  useEffect(() => {
    console.log("effect runs");
    return () => {
      console.log("effect cleanup");
    };
  }, [inputValue]);

  useEffect(() => {
    document.title = inputValue;
  }, [inputValue]);

  useEffect(() => {
    const onResize = () => {
      // console.log("resize");
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return function () {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // console.log("setInterval");
  //     setDate(new Date());
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(`https://dog.ceo/api/breeds/list/all`)
  //     .then((r) => r.json())
  //     .then((d) => {
  //       setBreeds(Object.keys(d.message));
  //     });
  // }, []);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>{contextValue}</div>
      <div>{width}</div>
      {/* <div>{date.toLocaleTimeString()}</div> */}
      <input type="text" value={inputValue} onChange={onInputChange} />
      {/* {breeds.map((b) => (
        <div>{b}</div>
      ))} */}
    </div>
  );
}

class Asd extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      inputValue: "asdasd",
      inputValue2: "",
    };
  }

  // componentDidMount() {
  //   document.title = this.state.inputValue;
  // }

  // componentDidUpdate() {
  //   document.title = this.state.inputValue;
  // }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onInputChange2 = (e) => {
    this.setState({
      inputValue2: e.target.value,
    });
  };

  render() {
    // console.log("Asd component rerendered");
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          value={this.state.inputValue2}
          onChange={this.onInputChange2}
        />
      </div>
    );
  }
}

export { Asd };
