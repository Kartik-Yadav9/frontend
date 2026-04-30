import React from 'react'
import Child from './Child';

function CounterParent() {
  return (
    <div>
      <p>CounterParent</p>
      <Child/>
    </div>
  );
}

export default CounterParent