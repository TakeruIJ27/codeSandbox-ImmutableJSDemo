import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Demo from "./demo";

function App() {
  return (
    <div className="App">
      <h1>H3770_CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>Immutable.js Demo Results Below: </h3>
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
