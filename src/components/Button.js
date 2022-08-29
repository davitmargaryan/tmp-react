import React from "react";
import ArrayCpm from "./ArrayCpm";

export default function Button() {
  const onBtnClick = () => {
    console.log("aaa");
  };

  return (
    <div>
      <button onClick={onBtnClick}>Some button</button>
      <ArrayCpm />
    </div>
  );
}
