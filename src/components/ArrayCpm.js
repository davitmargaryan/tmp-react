import React from "react";
import { v4 as uuid4 } from "uuid";
import Name from "./Name";

const myArr = [
  { id: uuid4(), name: "Davit" },
  { id: uuid4(), name: "Hrant" },
  { id: uuid4(), name: "Ara" },
  { id: uuid4(), name: "Ara" },
  { id: uuid4(), name: "Ara" },
  { id: uuid4(), name: "Ara" },
  { id: uuid4(), name: "Ara" },
];

function ArrayCpm() {
  return (
    <div>
      {myArr.map(function (el) {
        console.log(el.id);
        return <Name key={el.id} item={el} />;
      })}
    </div>
  );
}

export default ArrayCpm;
