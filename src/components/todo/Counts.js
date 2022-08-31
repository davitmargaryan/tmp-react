import React from "react";

export default function Counts({
  allCount = 0,
  checkedCount = 0,
  uncheckedCount = 0,
}) {
  return (
    <div>
      <div>
        All - <strong>{allCount}</strong>
      </div>
      <div>
        Checked - <strong>{checkedCount}</strong>
      </div>
      <div>
        Uncheck - <strong>{uncheckedCount}</strong>
      </div>
    </div>
  );
}
