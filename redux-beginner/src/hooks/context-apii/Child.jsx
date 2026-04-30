import React, { useContext } from 'react'
import CounterContext from './CounterContext';

function Child() {

    let {count, increment}= useContext(CounterContext)
  return (
    <div>
      <p>Child</p>
      <p>Count: {count}</p>
      <button onClick={increment}>increase</button>
    </div>
  );
}

export default Child