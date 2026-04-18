import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    let navigate= useNavigate()

    let handleClick=()=>{
        navigate("/task", {replace:true})
    }
  return (
    <div><p>home</p>
    <button onClick={handleClick}>task</button>

    </div>
  )
}

export default Home