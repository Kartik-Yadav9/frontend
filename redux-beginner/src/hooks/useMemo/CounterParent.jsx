import React, { useState } from 'react'
import SearchBar from './SearchBar';

function CounterParent() {

    const [count, setCount]= useState(0)
  return (
    <div>
      <p>CounterParent:{count}</p>
      <button onClick={()=>setCount((prev)=>prev+1)}>increase</button>
      <SearchBar/>
    </div>
  );
}

export default CounterParent