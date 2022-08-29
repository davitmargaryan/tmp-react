import React from "react";
import Button from "./Button";
import ButtonClass from "./ButtonClass";
import Clock from "./Clock";
import ClockClass from "./ClockClass";
import Form from "./Form";

function Hello({ name, asd, someObj = {}, someArr, someNumber }) {
  return (
    <div>
      <Clock />
      <hr />
      <ClockClass asd={444} dsa={7777} />
      <h1 className="asdasd">Hello {name}</h1>
      <div>this is asd prop - {someObj.asd}</div>
      <div>this is dsa prop - {someObj.dsa}</div>
      <Button />
      <br />
      <ButtonClass />
      <Form />
    </div>
  );
}

export default Hello;
