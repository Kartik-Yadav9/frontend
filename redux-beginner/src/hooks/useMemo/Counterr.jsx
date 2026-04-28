import React, { useState } from 'react'
import SearchBar from './SearchBar';

function Counter() {

    const [count, setCount]= useState(0)
  return (
    <div className="text-center flex flex-col gap-10">
      <div>
        <p className="text-2xl">
          Counter: <span className="font-bold">{count}</span>
        </p>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="border bg-gray-400 px-2 rounded-2xl text-white"
        >
          increase
        </button>
      </div>
      <SearchBar />
    </div>
  );
}

export default Counter
