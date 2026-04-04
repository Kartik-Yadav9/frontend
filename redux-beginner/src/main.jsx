import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/Store.js'
import Toggle from './toggle/Toggle.jsx'
import Timer from './timer/Timer.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <Toggle/> */}
      <Timer/>
    </Provider>
  </StrictMode>
);
