import React, { useState } from 'react'
import Form from './Form'
import Display from './Display'

function Toggle() {
    const [toggle, setToggle]= useState(true)
  return (
    <>
    <button onClick={()=>setToggle(!toggle)}>{toggle ? "show form" : "show display"}</button>
    {toggle ? <Display/> : <Form/>}

    
    </>
  )
}

export default Toggle