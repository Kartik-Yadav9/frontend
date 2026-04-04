// import React, { useState } from "react";
// import Counter from "./Counter";

// function Timer() {
//   let [count, setCount] = useState(0);
//   let [time, setTime] = useState(0);
//   let [timerId, setTimerId] = useState(null);

//   let handleStart = () => {
//     if(timerId) return;
//     let id = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     setTimerId(id);
//   };

//   let stopfunc=()=>{
//     clearInterval(timerId)
//     setTimerId(null)
//   }

//   let handleReset=()=>[
//     clearInterval(timerId),
//     setTimerId(null),
//     setTime(0),

//   ]

//   return (
//     <div>
//       <div>
//         <p>{time}</p>
//         <button onClick={stopfunc}>stop</button>
//         <button onClick={handleReset}>reset</button>
//         <button onClick={handleStart}>start</button>
//       </div>

//       <Counter count={count} setCount={setCount} />
//     </div>
//   );
// }

// export default Timer;

import React, { useState } from "react";

function Timer() {
  let [times, setTimes] = useState(0);
  let [timerId, setTimeId] = useState(null);

  const handleStart = () => {
    if (timerId) return;

    let timer = setInterval(() => {
      setTimes((prev) => prev + 1);
    }, 1000);

    setTimeId(timer);
  };

  const handleStop = () => {
    clearInterval(timerId); //to stop timer

    setTimeId(null);
  };

  const resetHandle = () => {
    setTimeId(null);
    clearInterval(timerId); //to stop timer
    setTimes(0)
  };
  return (
    <div>
      count: {times}
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={resetHandle}>reset</button>
    </div>
  );
}

export default Timer;
