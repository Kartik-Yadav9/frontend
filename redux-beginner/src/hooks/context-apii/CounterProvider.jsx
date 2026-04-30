import { useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({ children }) => {

    const [count, setCount] =useState(0)

    let increment=()=>{
        setCount((prev)=>prev+1)
    }
  return( 
  <CounterContext.Provider value={{count, increment}}>
    {children}
  </CounterContext.Provider>
  )
};

export default CounterProvider;
