import React, { memo } from 'react'

function ChildMemo({name}) {
    console.log("example");
    
  return (
    <div>ChildMemo: {name}</div>
  )
}

export default memo(ChildMemo);