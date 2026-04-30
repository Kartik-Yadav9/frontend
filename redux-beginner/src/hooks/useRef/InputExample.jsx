import React, { useRef, useState } from "react";

function InputExample() {
  const [data, setData] = useState("");
  let input1Ref = useRef();
  let input2Ref = useRef();

  let handleclick1 = () => {
    console.log("hii");
    console.log(input1Ref.current);
    input1Ref.current.style.width = "300px";
  };

  let handleclick2 = () => {
    console.log("bye");
    input2Ref.current.style.width = "300px";
    input2Ref.current.focus();
  };
  return (
    <div className="flex flex-col  gap-2.5 ">
      <div>
        {" "}
        <label>name: </label>
        <input
          placeholder="name"
          ref={input1Ref}
          type="text"
          className="text-center border w-25"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
      </div>
      <div>
        <label>age:</label>
        <input
          placeholder="age"
          type="number"
          ref={input2Ref}
          className="text-center border w-25"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
      </div>

      <button
        className="border px-2 rounded-2xl bg-red-300 w-20"
        onClick={handleclick1}
      >
        name
      </button>
      <button
        className="border px-2 rounded-2xl bg-green-300 w-30"
        onClick={handleclick2}
      >
        number
      </button>
    </div>
  );
}

export default InputExample;
