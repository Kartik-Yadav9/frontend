import React, { memo } from 'react'

function ChildCallback({handleClick}) {
    console.log("re-rendered");
    
  return (
    <button
      className="border bg-gray-500 text-white w-25"
      onClick={handleClick}
    >
      increase
    </button>
  );
}

export default memo(ChildCallback)