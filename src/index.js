import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
require('./mocks');

ReactDOM.render(
  <React.StrictMode>
    <h5>THÔNG TIN ĐIỂM ĐẾN CỦA CÁC CA DƯƠNG TÍNH VỚI SARS-CoV-2</h5>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();