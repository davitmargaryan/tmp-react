import React from "react";
import SomeCmp from "./SomeCmp";

const Clock = () => {
  return (
    <>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <SomeCmp />
    </>
  );
};

export default Clock;
