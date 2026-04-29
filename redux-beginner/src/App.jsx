import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar.jsx";
import Home from "./ui/Home.jsx";

// Regular imports (not lazy loaded)
import Counter from "./features/counter/Counter";
import Timer from "./timer/Timer";
import ReactLazy from "./code-split/ReactLazy.jsx";
import DebounceThrottle from "./debounce-throttle/DebounceThrottle.jsx"
import ReactMemo from "./hooks/reactMemo/ReactMemo.jsx"
import SearchBar from "./hooks/useMemo/SearchBar.jsx";
import Counterr from "./hooks/useMemo/Counterr.jsx";
import UseCallback from "./hooks/useCallback/UseCallback.jsx";
import ProductList from "./hooks/useCallback/ProductList.jsx";
import InputExample from "./hooks/useRef/InputExample.jsx";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <ReactMemo/> */}
      {/* <Counterr/> */}
      {/* <UseCallback/> */}
      {/* <ProductList/> */}
      <InputExample/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-lazy" element={<ReactLazy />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/debounce-throttle" element={<DebounceThrottle/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
