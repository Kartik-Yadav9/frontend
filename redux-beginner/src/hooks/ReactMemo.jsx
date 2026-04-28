import React, { useState } from "react";
import ChildMemo from "./ChildMemo";

function ReactMemo() {
  let [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center w-100% items-center gap-4">
      <p className="text-4xl">ReactMemo</p>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="border bg-gray-500 text-white w-25"
      >
        increase
      </button>
      <ChildMemo name="kartik" />
      {/* <ChildMemo name={count} /> */}
      {/* this comment code tell that prop value is changing so it will re-render */}
    </div>
  );
}

export default ReactMemo;
