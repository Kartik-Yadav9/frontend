import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

function UseCallback() {
  let [count, setCount] = useState(0);
  let handleClick= useCallback(()=>{
    setCount((prev)=>prev+1)
  },[])
  return (
    <div className="flex flex-col justify-center w-100% items-center gap-4">
      <p className="text-4xl">Use Callback</p>
      <p>Count: {count}</p>
      
      <ChildCallback handleClick={handleClick}/>
    </div>
  );
}

export default UseCallback;
