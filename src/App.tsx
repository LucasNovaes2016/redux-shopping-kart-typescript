import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "../src/core/redux/store";

const App: React.FC = () => {

  return (
    <Provider store={store}>
    <div className="App">
      <h1> Hello World! </h1>
    </div>
    </Provider>
  );
}

export default App;
