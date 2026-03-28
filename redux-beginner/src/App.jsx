import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, incByAmnt, increment, reset } from "./features/counter/CounterSlice";
import { useState } from "react";

function App() {
  let [increase, setIncrease] = useState(0);
  let count = useSelector((state) => state.counterr.valuess);
  let dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const incByAmount = () => {
    dispatch(incByAmnt(increase)); //increase is the payload
  };

  return (
    <>
      <div>
        <button onClick={handleIncrease}>increment</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrease}>decrement</button>
        <button onClick={handleReset}>reset</button>
        <input
          type="number"
          value={increase}
          onChange={(e) => setIncrease(e.target.value)}
        />
        <button onClick={incByAmount}>Inc by Amount</button>
      </div>
    </>
  );
}

export default App;
