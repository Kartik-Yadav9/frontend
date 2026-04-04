import React from 'react'

function Counter({count, setCount}) {
  return (
    <div>
      Counter:{count}
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default Counter